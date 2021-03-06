# Class: WrapperCache

Kit ContractWrappers factory & cache.

Provides access to all contract wrappers for celo core contracts

## Hierarchy

* **WrapperCache**

## Index

### Constructors

* [constructor](_contract_cache_.wrappercache.md#constructor)

### Properties

* [kit](_contract_cache_.wrappercache.md#readonly-kit)

### Methods

* [getAccounts](_contract_cache_.wrappercache.md#getaccounts)
* [getAttestations](_contract_cache_.wrappercache.md#getattestations)
* [getBlockchainParameters](_contract_cache_.wrappercache.md#getblockchainparameters)
* [getContract](_contract_cache_.wrappercache.md#getcontract)
* [getDoubleSigningSlasher](_contract_cache_.wrappercache.md#getdoublesigningslasher)
* [getDowntimeSlasher](_contract_cache_.wrappercache.md#getdowntimeslasher)
* [getElection](_contract_cache_.wrappercache.md#getelection)
* [getEscrow](_contract_cache_.wrappercache.md#getescrow)
* [getExchange](_contract_cache_.wrappercache.md#getexchange)
* [getFreezer](_contract_cache_.wrappercache.md#getfreezer)
* [getGasPriceMinimum](_contract_cache_.wrappercache.md#getgaspriceminimum)
* [getGoldToken](_contract_cache_.wrappercache.md#getgoldtoken)
* [getGovernance](_contract_cache_.wrappercache.md#getgovernance)
* [getLockedGold](_contract_cache_.wrappercache.md#getlockedgold)
* [getMetaTransactionWallet](_contract_cache_.wrappercache.md#getmetatransactionwallet)
* [getMetaTransactionWalletDeployer](_contract_cache_.wrappercache.md#getmetatransactionwalletdeployer)
* [getMultiSig](_contract_cache_.wrappercache.md#getmultisig)
* [getReserve](_contract_cache_.wrappercache.md#getreserve)
* [getSortedOracles](_contract_cache_.wrappercache.md#getsortedoracles)
* [getStableToken](_contract_cache_.wrappercache.md#getstabletoken)
* [getValidators](_contract_cache_.wrappercache.md#getvalidators)

## Constructors

###  constructor

\+ **new WrapperCache**(`kit`: [ContractKit](_kit_.contractkit.md)): *[WrapperCache](_contract_cache_.wrappercache.md)*

*Defined in [contractkit/src/contract-cache.ts:89](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_kit_.contractkit.md) |

**Returns:** *[WrapperCache](_contract_cache_.wrappercache.md)*

## Properties

### `Readonly` kit

• **kit**: *[ContractKit](_kit_.contractkit.md)*

*Defined in [contractkit/src/contract-cache.ts:91](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L91)*

## Methods

###  getAccounts

▸ **getAccounts**(): *Promise‹[AccountsWrapper](_wrappers_accounts_.accountswrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:93](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L93)*

**Returns:** *Promise‹[AccountsWrapper](_wrappers_accounts_.accountswrapper.md)‹››*

___

###  getAttestations

▸ **getAttestations**(): *Promise‹[AttestationsWrapper](_wrappers_attestations_.attestationswrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:96](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L96)*

**Returns:** *Promise‹[AttestationsWrapper](_wrappers_attestations_.attestationswrapper.md)‹››*

___

###  getBlockchainParameters

▸ **getBlockchainParameters**(): *Promise‹[BlockchainParametersWrapper](_wrappers_blockchainparameters_.blockchainparameterswrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:99](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L99)*

**Returns:** *Promise‹[BlockchainParametersWrapper](_wrappers_blockchainparameters_.blockchainparameterswrapper.md)‹››*

___

###  getContract

▸ **getContract**<**C**>(`contract`: C, `address?`: undefined | string): *Promise‹NonNullable‹WrapperCacheMap[C]››*

*Defined in [contractkit/src/contract-cache.ts:166](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L166)*

Get Contract wrapper

**Type parameters:**

▪ **C**: *[ValidWrappers](../modules/_contract_cache_.md#validwrappers)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | C |
`address?` | undefined &#124; string |

**Returns:** *Promise‹NonNullable‹WrapperCacheMap[C]››*

___

###  getDoubleSigningSlasher

▸ **getDoubleSigningSlasher**(): *Promise‹[DoubleSigningSlasherWrapper](_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:102](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L102)*

**Returns:** *Promise‹[DoubleSigningSlasherWrapper](_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)‹››*

___

###  getDowntimeSlasher

▸ **getDowntimeSlasher**(): *Promise‹[DowntimeSlasherWrapper](_wrappers_downtimeslasher_.downtimeslasherwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:105](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L105)*

**Returns:** *Promise‹[DowntimeSlasherWrapper](_wrappers_downtimeslasher_.downtimeslasherwrapper.md)‹››*

___

###  getElection

▸ **getElection**(): *Promise‹[ElectionWrapper](_wrappers_election_.electionwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:108](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L108)*

**Returns:** *Promise‹[ElectionWrapper](_wrappers_election_.electionwrapper.md)‹››*

___

###  getEscrow

▸ **getEscrow**(): *Promise‹[EscrowWrapper](_wrappers_escrow_.escrowwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:114](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L114)*

**Returns:** *Promise‹[EscrowWrapper](_wrappers_escrow_.escrowwrapper.md)‹››*

___

###  getExchange

▸ **getExchange**(): *Promise‹[ExchangeWrapper](_wrappers_exchange_.exchangewrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:117](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L117)*

**Returns:** *Promise‹[ExchangeWrapper](_wrappers_exchange_.exchangewrapper.md)‹››*

___

###  getFreezer

▸ **getFreezer**(): *Promise‹[FreezerWrapper](_wrappers_freezer_.freezerwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:120](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L120)*

**Returns:** *Promise‹[FreezerWrapper](_wrappers_freezer_.freezerwrapper.md)‹››*

___

###  getGasPriceMinimum

▸ **getGasPriceMinimum**(): *Promise‹[GasPriceMinimumWrapper](_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:126](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L126)*

**Returns:** *Promise‹[GasPriceMinimumWrapper](_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)‹››*

___

###  getGoldToken

▸ **getGoldToken**(): *Promise‹[GoldTokenWrapper](_wrappers_goldtokenwrapper_.goldtokenwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:129](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L129)*

**Returns:** *Promise‹[GoldTokenWrapper](_wrappers_goldtokenwrapper_.goldtokenwrapper.md)‹››*

___

###  getGovernance

▸ **getGovernance**(): *Promise‹[GovernanceWrapper](_wrappers_governance_.governancewrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:132](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L132)*

**Returns:** *Promise‹[GovernanceWrapper](_wrappers_governance_.governancewrapper.md)‹››*

___

###  getLockedGold

▸ **getLockedGold**(): *Promise‹[LockedGoldWrapper](_wrappers_lockedgold_.lockedgoldwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:135](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L135)*

**Returns:** *Promise‹[LockedGoldWrapper](_wrappers_lockedgold_.lockedgoldwrapper.md)‹››*

___

###  getMetaTransactionWallet

▸ **getMetaTransactionWallet**(`address`: string): *Promise‹[MetaTransactionWalletWrapper](_wrappers_metatransactionwallet_.metatransactionwalletwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:138](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹[MetaTransactionWalletWrapper](_wrappers_metatransactionwallet_.metatransactionwalletwrapper.md)‹››*

___

###  getMetaTransactionWalletDeployer

▸ **getMetaTransactionWalletDeployer**(`address`: string): *Promise‹[MetaTransactionWalletDeployerWrapper](_wrappers_metatransactionwalletdeployer_.metatransactionwalletdeployerwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:141](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹[MetaTransactionWalletDeployerWrapper](_wrappers_metatransactionwalletdeployer_.metatransactionwalletdeployerwrapper.md)‹››*

___

###  getMultiSig

▸ **getMultiSig**(`address`: string): *Promise‹[MultiSigWrapper](_wrappers_multisig_.multisigwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:144](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹[MultiSigWrapper](_wrappers_multisig_.multisigwrapper.md)‹››*

___

###  getReserve

▸ **getReserve**(): *Promise‹[ReserveWrapper](_wrappers_reserve_.reservewrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:150](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L150)*

**Returns:** *Promise‹[ReserveWrapper](_wrappers_reserve_.reservewrapper.md)‹››*

___

###  getSortedOracles

▸ **getSortedOracles**(): *Promise‹[SortedOraclesWrapper](_wrappers_sortedoracles_.sortedoracleswrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:153](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L153)*

**Returns:** *Promise‹[SortedOraclesWrapper](_wrappers_sortedoracles_.sortedoracleswrapper.md)‹››*

___

###  getStableToken

▸ **getStableToken**(): *Promise‹[StableTokenWrapper](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:156](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L156)*

**Returns:** *Promise‹[StableTokenWrapper](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)‹››*

___

###  getValidators

▸ **getValidators**(): *Promise‹[ValidatorsWrapper](_wrappers_validators_.validatorswrapper.md)‹››*

*Defined in [contractkit/src/contract-cache.ts:159](https://github.com/celo-org/celo-monorepo/blob/master/packages/sdk/contractkit/src/contract-cache.ts#L159)*

**Returns:** *Promise‹[ValidatorsWrapper](_wrappers_validators_.validatorswrapper.md)‹››*
