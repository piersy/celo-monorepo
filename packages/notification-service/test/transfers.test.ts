import { Response as FetchResponseClass } from 'node-fetch'
import { Log, Response, Transfer } from '../src/blockscout/blockscout'
import {
  convertWeiValue,
  filterAndJoinTransfers,
  handleTransferNotifications,
  notifyForNewTransfers,
  updateProcessedBlocks,
} from '../src/blockscout/transfers'

export let TRANSFER1: Transfer
export let TRANSFER2: Transfer
export let TRANSFER3: Transfer
export let sendPaymentNotificationMock: any
export let getLastBlockNotifiedMock: any
export let setLastBlockNotifiedMock: any
export let decodeLogsMock: any
export let formatNativeTransfersMock: any
const lastNotifiedBlock = 150

jest.mock('node-fetch')
const fetchMock: jest.Mock = require('node-fetch')
const FetchResponse: typeof FetchResponseClass = jest.requireActual('node-fetch').Response

jest.mock('firebase-admin')

jest.mock('../src/firebase', () => {
  sendPaymentNotificationMock = jest.fn(() => {
    return new Promise<void>((resolve) => setTimeout(resolve, 1000))
  })
  getLastBlockNotifiedMock = jest.fn(() => lastNotifiedBlock)
  setLastBlockNotifiedMock = jest.fn((newblock) => newblock)
  return {
    sendPaymentNotification: sendPaymentNotificationMock,
    getLastBlockNotified: getLastBlockNotifiedMock,
    setLastBlockNotified: setLastBlockNotifiedMock,
  }
})

jest.mock('../src/blockscout/decode', () => {
  TRANSFER1 = {
    recipient: 'recipient',
    sender: 'sender',
    value: '1',
    blockNumber: 153,
    txHash: 'txhash',
    timestamp: 1,
  }
  TRANSFER2 = {
    recipient: 'recipient',
    sender: 'sender',
    value: '1',
    blockNumber: 154,
    txHash: 'txhash2',
    timestamp: 1,
  }
  const goldTransfers = new Map<string, Transfer[]>()
  const stableTransfers = new Map<string, Transfer[]>()

  goldTransfers.set('txhash', [TRANSFER1])
  stableTransfers.set('txhash2', [TRANSFER2])

  decodeLogsMock = jest
    .fn()
    .mockReturnValueOnce({ transfers: goldTransfers, latestBlock: 153 })
    .mockReturnValueOnce({ transfers: stableTransfers, latestBlock: 154 })

  return {
    ...jest.requireActual('../src/blockscout/decode'),
    decodeLogs: decodeLogsMock,
  }
})

jest.mock('../src/blockscout/nativeTransfersFormatter', () => {
  TRANSFER3 = {
    recipient: 'recipient',
    sender: 'sender',
    value: '3',
    blockNumber: 152,
    txHash: 'txhash3',
    timestamp: 123,
  }
  const transfers = new Map<string, Transfer[]>()

  transfers.set('txhash', [TRANSFER3])

  formatNativeTransfersMock = jest
    .fn()
    .mockReturnValueOnce({ transfers: transfers, latestBlock: 152 })

  return {
    ...jest.requireActual('../src/blockscout/nativeTransfersFormatter'),
    formatNativeTransfers: formatNativeTransfersMock,
  }
})

const defaultResponse: Response<Log> = {
  status: '',
  result: [
    {
      transactionIndex: '',
      transactionHash: '',
      topics: [''],
      timeStamp: '',
      logIndex: '',
      gatewayFeeRecipient: '',
      gatewayFee: '',
      gasUsed: '',
      gasPrice: '',
      feeCurrency: '',
      data: '',
      blockNumber: '',
      address: '',
    },
  ],
  message: '',
}
const defaultResponseJson = JSON.stringify(defaultResponse)

describe('Transfers', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    fetchMock.mockImplementation(() => new FetchResponse(defaultResponseJson))
  })

  it('should exclude exchanges', () => {
    const goldTransfers = new Map<string, Transfer[]>()
    const stableTransfers = new Map<string, Transfer[]>()
    const nativeCeloTransfers = new Map<string, Transfer[]>()

    goldTransfers.set('txhash', [TRANSFER1])
    stableTransfers.set('txhash', [TRANSFER1])

    const concated = filterAndJoinTransfers(goldTransfers, nativeCeloTransfers, stableTransfers)

    expect(concated).toEqual([])
  })

  it('should include unique transactions and update the last block', () => {
    const goldTransfers = new Map<string, Transfer[]>()
    const stableTransfers = new Map<string, Transfer[]>()
    const nativeCeloTransfers = new Map<string, Transfer[]>()

    goldTransfers.set('txhash', [TRANSFER1])
    stableTransfers.set('txhash2', [TRANSFER2])
    nativeCeloTransfers.set('txhash3', [TRANSFER3])

    const concated = filterAndJoinTransfers(goldTransfers, nativeCeloTransfers, stableTransfers)

    expect(concated).toEqual([TRANSFER1, TRANSFER2, TRANSFER3])
  })

  it('should notify for new transfers since last block notified', async () => {
    const transfers = [TRANSFER1, TRANSFER2]
    const returned = await notifyForNewTransfers(transfers)

    expect(sendPaymentNotificationMock).toHaveBeenCalledWith(
      TRANSFER1.sender,
      TRANSFER1.recipient,
      convertWeiValue(TRANSFER1.value),
      TRANSFER1.currency,
      {
        ...TRANSFER1,
        blockNumber: String(TRANSFER1.blockNumber),
        timestamp: String(TRANSFER1.timestamp),
      }
    )

    expect(sendPaymentNotificationMock).toHaveBeenCalledWith(
      TRANSFER1.sender,
      TRANSFER2.recipient,
      convertWeiValue(TRANSFER2.value),
      TRANSFER2.currency,
      {
        ...TRANSFER2,
        blockNumber: String(TRANSFER2.blockNumber),
        timestamp: String(TRANSFER2.timestamp),
      }
    )
    expect(returned.length).toEqual(transfers.length)
  })

  it('should only notify once for each transfer', async () => {
    const transfers = [TRANSFER1]
    updateProcessedBlocks(transfers, TRANSFER1.blockNumber)
    const returned = await notifyForNewTransfers(transfers)
    expect(sendPaymentNotificationMock).not.toHaveBeenCalled()
    expect(returned.length).toEqual(0)
  })

  it('should update the last set block number', async () => {
    await handleTransferNotifications()
    expect(setLastBlockNotifiedMock).toBeCalledWith(
      Math.max(TRANSFER1.blockNumber, TRANSFER2.blockNumber)
    )
  })

  // This is so the polling loop can retry on the next iteration
  // as we need both the gold and stable transfers fetch from blockscout to work
  // in order to send the right push notifications
  it('should propagate fetch errors', async () => {
    fetchMock.mockRejectedValue(new Error('FAKE ERROR, IGNORE'))
    await expect(handleTransferNotifications()).rejects.toThrow('FAKE ERROR, IGNORE')
    expect(sendPaymentNotificationMock).not.toHaveBeenCalled()
    expect(setLastBlockNotifiedMock).not.toHaveBeenCalled()
  })
})
