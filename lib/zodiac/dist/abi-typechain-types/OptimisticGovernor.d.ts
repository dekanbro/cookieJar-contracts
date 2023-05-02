import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace OptimisticGovernor {
    type TransactionStruct = {
        to: PromiseOrValue<string>;
        operation: PromiseOrValue<BigNumberish>;
        value: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type TransactionStructOutput = [string, number, BigNumber, string] & {
        to: string;
        operation: number;
        value: BigNumber;
        data: string;
    };
    type ProposalStruct = {
        transactions: OptimisticGovernor.TransactionStruct[];
        requestTime: PromiseOrValue<BigNumberish>;
    };
    type ProposalStructOutput = [
        OptimisticGovernor.TransactionStructOutput[],
        BigNumber
    ] & {
        transactions: OptimisticGovernor.TransactionStructOutput[];
        requestTime: BigNumber;
    };
}
export interface OptimisticGovernorInterface extends utils.Interface {
    functions: {
        "EXPLANATION_KEY()": FunctionFragment;
        "PROPOSAL_HASH_KEY()": FunctionFragment;
        "RULES_KEY()": FunctionFragment;
        "assertionDisputedCallback(bytes32)": FunctionFragment;
        "assertionIds(bytes32)": FunctionFragment;
        "assertionResolvedCallback(bytes32,bool)": FunctionFragment;
        "avatar()": FunctionFragment;
        "bondAmount()": FunctionFragment;
        "collateral()": FunctionFragment;
        "deleteProposalOnUpgrade(bytes32)": FunctionFragment;
        "escalationManager()": FunctionFragment;
        "executeProposal((address,uint8,uint256,bytes)[])": FunctionFragment;
        "finder()": FunctionFragment;
        "getCurrentTime()": FunctionFragment;
        "getGuard()": FunctionFragment;
        "getProposalBond()": FunctionFragment;
        "guard()": FunctionFragment;
        "identifier()": FunctionFragment;
        "liveness()": FunctionFragment;
        "optimisticOracleV3()": FunctionFragment;
        "owner()": FunctionFragment;
        "proposalHashes(bytes32)": FunctionFragment;
        "proposeTransactions((address,uint8,uint256,bytes)[],bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rules()": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setCollateralAndBond(address,uint256)": FunctionFragment;
        "setEscalationManager(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setIdentifier(bytes32)": FunctionFragment;
        "setLiveness(uint64)": FunctionFragment;
        "setRules(string)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "sync()": FunctionFragment;
        "target()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "EXPLANATION_KEY" | "PROPOSAL_HASH_KEY" | "RULES_KEY" | "assertionDisputedCallback" | "assertionIds" | "assertionResolvedCallback" | "avatar" | "bondAmount" | "collateral" | "deleteProposalOnUpgrade" | "escalationManager" | "executeProposal" | "finder" | "getCurrentTime" | "getGuard" | "getProposalBond" | "guard" | "identifier" | "liveness" | "optimisticOracleV3" | "owner" | "proposalHashes" | "proposeTransactions" | "renounceOwnership" | "rules" | "setAvatar" | "setCollateralAndBond" | "setEscalationManager" | "setGuard" | "setIdentifier" | "setLiveness" | "setRules" | "setTarget" | "setUp" | "sync" | "target" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "EXPLANATION_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSAL_HASH_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "RULES_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "assertionDisputedCallback", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "assertionIds", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "assertionResolvedCallback", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "bondAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateral", values?: undefined): string;
    encodeFunctionData(functionFragment: "deleteProposalOnUpgrade", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "escalationManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [OptimisticGovernor.TransactionStruct[]]): string;
    encodeFunctionData(functionFragment: "finder", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProposalBond", values?: undefined): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "identifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "liveness", values?: undefined): string;
    encodeFunctionData(functionFragment: "optimisticOracleV3", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalHashes", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "proposeTransactions", values: [OptimisticGovernor.TransactionStruct[], PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rules", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCollateralAndBond", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setEscalationManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIdentifier", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setLiveness", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setRules", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "EXPLANATION_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSAL_HASH_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RULES_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertionDisputedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertionIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertionResolvedCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bondAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteProposalOnUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escalationManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "identifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liveness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optimisticOracleV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollateralAndBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEscalationManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIdentifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiveness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OptimisticGovernorDeployed(address,address,address)": EventFragment;
        "OptimisticOracleChanged(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalDeleted(bytes32,bytes32)": EventFragment;
        "ProposalExecuted(bytes32,bytes32)": EventFragment;
        "SetCollateralAndBond(address,uint256)": EventFragment;
        "SetEscalationManager(address)": EventFragment;
        "SetIdentifier(bytes32)": EventFragment;
        "SetLiveness(uint64)": EventFragment;
        "SetRules(string)": EventFragment;
        "TargetSet(address,address)": EventFragment;
        "TransactionExecuted(bytes32,bytes32,uint256)": EventFragment;
        "TransactionsProposed(address,uint256,bytes32,tuple,bytes32,bytes,string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptimisticGovernorDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptimisticOracleChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalDeleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetCollateralAndBond"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetEscalationManager"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetIdentifier"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLiveness"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetRules"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionsProposed"): EventFragment;
}
export interface AvatarSetEventObject {
    previousAvatar: string;
    newAvatar: string;
}
export type AvatarSetEvent = TypedEvent<[string, string], AvatarSetEventObject>;
export type AvatarSetEventFilter = TypedEventFilter<AvatarSetEvent>;
export interface ChangedGuardEventObject {
    guard: string;
}
export type ChangedGuardEvent = TypedEvent<[string], ChangedGuardEventObject>;
export type ChangedGuardEventFilter = TypedEventFilter<ChangedGuardEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OptimisticGovernorDeployedEventObject {
    owner: string;
    avatar: string;
    target: string;
}
export type OptimisticGovernorDeployedEvent = TypedEvent<[
    string,
    string,
    string
], OptimisticGovernorDeployedEventObject>;
export type OptimisticGovernorDeployedEventFilter = TypedEventFilter<OptimisticGovernorDeployedEvent>;
export interface OptimisticOracleChangedEventObject {
    newOptimisticOracleV3: string;
}
export type OptimisticOracleChangedEvent = TypedEvent<[
    string
], OptimisticOracleChangedEventObject>;
export type OptimisticOracleChangedEventFilter = TypedEventFilter<OptimisticOracleChangedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposalDeletedEventObject {
    proposalHash: string;
    assertionId: string;
}
export type ProposalDeletedEvent = TypedEvent<[
    string,
    string
], ProposalDeletedEventObject>;
export type ProposalDeletedEventFilter = TypedEventFilter<ProposalDeletedEvent>;
export interface ProposalExecutedEventObject {
    proposalHash: string;
    assertionId: string;
}
export type ProposalExecutedEvent = TypedEvent<[
    string,
    string
], ProposalExecutedEventObject>;
export type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface SetCollateralAndBondEventObject {
    collateral: string;
    bondAmount: BigNumber;
}
export type SetCollateralAndBondEvent = TypedEvent<[
    string,
    BigNumber
], SetCollateralAndBondEventObject>;
export type SetCollateralAndBondEventFilter = TypedEventFilter<SetCollateralAndBondEvent>;
export interface SetEscalationManagerEventObject {
    escalationManager: string;
}
export type SetEscalationManagerEvent = TypedEvent<[
    string
], SetEscalationManagerEventObject>;
export type SetEscalationManagerEventFilter = TypedEventFilter<SetEscalationManagerEvent>;
export interface SetIdentifierEventObject {
    identifier: string;
}
export type SetIdentifierEvent = TypedEvent<[string], SetIdentifierEventObject>;
export type SetIdentifierEventFilter = TypedEventFilter<SetIdentifierEvent>;
export interface SetLivenessEventObject {
    liveness: BigNumber;
}
export type SetLivenessEvent = TypedEvent<[BigNumber], SetLivenessEventObject>;
export type SetLivenessEventFilter = TypedEventFilter<SetLivenessEvent>;
export interface SetRulesEventObject {
    rules: string;
}
export type SetRulesEvent = TypedEvent<[string], SetRulesEventObject>;
export type SetRulesEventFilter = TypedEventFilter<SetRulesEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface TransactionExecutedEventObject {
    proposalHash: string;
    assertionId: string;
    transactionIndex: BigNumber;
}
export type TransactionExecutedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransactionExecutedEventObject>;
export type TransactionExecutedEventFilter = TypedEventFilter<TransactionExecutedEvent>;
export interface TransactionsProposedEventObject {
    proposer: string;
    proposalTime: BigNumber;
    assertionId: string;
    proposal: OptimisticGovernor.ProposalStructOutput;
    proposalHash: string;
    explanation: string;
    rules: string;
    challengeWindowEnds: BigNumber;
}
export type TransactionsProposedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    OptimisticGovernor.ProposalStructOutput,
    string,
    string,
    string,
    BigNumber
], TransactionsProposedEventObject>;
export type TransactionsProposedEventFilter = TypedEventFilter<TransactionsProposedEvent>;
export interface OptimisticGovernor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OptimisticGovernorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        EXPLANATION_KEY(overrides?: CallOverrides): Promise<[string]>;
        PROPOSAL_HASH_KEY(overrides?: CallOverrides): Promise<[string]>;
        RULES_KEY(overrides?: CallOverrides): Promise<[string]>;
        assertionDisputedCallback(assertionId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        assertionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        assertionResolvedCallback(assertionId: PromiseOrValue<BytesLike>, assertedTruthfully: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        bondAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        collateral(overrides?: CallOverrides): Promise<[string]>;
        deleteProposalOnUpgrade(proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        escalationManager(overrides?: CallOverrides): Promise<[string]>;
        executeProposal(transactions: OptimisticGovernor.TransactionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finder(overrides?: CallOverrides): Promise<[string]>;
        getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        getProposalBond(overrides?: CallOverrides): Promise<[BigNumber]>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        identifier(overrides?: CallOverrides): Promise<[string]>;
        liveness(overrides?: CallOverrides): Promise<[BigNumber]>;
        optimisticOracleV3(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proposalHashes(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        proposeTransactions(transactions: OptimisticGovernor.TransactionStruct[], explanation: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rules(overrides?: CallOverrides): Promise<[string]>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCollateralAndBond(_collateral: PromiseOrValue<string>, _bondAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEscalationManager(_escalationManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIdentifier(_identifier: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiveness(_liveness: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRules(_rules: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    EXPLANATION_KEY(overrides?: CallOverrides): Promise<string>;
    PROPOSAL_HASH_KEY(overrides?: CallOverrides): Promise<string>;
    RULES_KEY(overrides?: CallOverrides): Promise<string>;
    assertionDisputedCallback(assertionId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    assertionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    assertionResolvedCallback(assertionId: PromiseOrValue<BytesLike>, assertedTruthfully: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    avatar(overrides?: CallOverrides): Promise<string>;
    bondAmount(overrides?: CallOverrides): Promise<BigNumber>;
    collateral(overrides?: CallOverrides): Promise<string>;
    deleteProposalOnUpgrade(proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    escalationManager(overrides?: CallOverrides): Promise<string>;
    executeProposal(transactions: OptimisticGovernor.TransactionStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finder(overrides?: CallOverrides): Promise<string>;
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    getProposalBond(overrides?: CallOverrides): Promise<BigNumber>;
    guard(overrides?: CallOverrides): Promise<string>;
    identifier(overrides?: CallOverrides): Promise<string>;
    liveness(overrides?: CallOverrides): Promise<BigNumber>;
    optimisticOracleV3(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    proposalHashes(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    proposeTransactions(transactions: OptimisticGovernor.TransactionStruct[], explanation: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rules(overrides?: CallOverrides): Promise<string>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCollateralAndBond(_collateral: PromiseOrValue<string>, _bondAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEscalationManager(_escalationManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIdentifier(_identifier: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiveness(_liveness: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRules(_rules: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sync(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        EXPLANATION_KEY(overrides?: CallOverrides): Promise<string>;
        PROPOSAL_HASH_KEY(overrides?: CallOverrides): Promise<string>;
        RULES_KEY(overrides?: CallOverrides): Promise<string>;
        assertionDisputedCallback(assertionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        assertionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        assertionResolvedCallback(assertionId: PromiseOrValue<BytesLike>, assertedTruthfully: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        avatar(overrides?: CallOverrides): Promise<string>;
        bondAmount(overrides?: CallOverrides): Promise<BigNumber>;
        collateral(overrides?: CallOverrides): Promise<string>;
        deleteProposalOnUpgrade(proposalHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        escalationManager(overrides?: CallOverrides): Promise<string>;
        executeProposal(transactions: OptimisticGovernor.TransactionStruct[], overrides?: CallOverrides): Promise<void>;
        finder(overrides?: CallOverrides): Promise<string>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        getProposalBond(overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<string>;
        identifier(overrides?: CallOverrides): Promise<string>;
        liveness(overrides?: CallOverrides): Promise<BigNumber>;
        optimisticOracleV3(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        proposalHashes(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        proposeTransactions(transactions: OptimisticGovernor.TransactionStruct[], explanation: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rules(overrides?: CallOverrides): Promise<string>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setCollateralAndBond(_collateral: PromiseOrValue<string>, _bondAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEscalationManager(_escalationManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setIdentifier(_identifier: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setLiveness(_liveness: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRules(_rules: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sync(overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OptimisticGovernorDeployed(address,address,address)"(owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): OptimisticGovernorDeployedEventFilter;
        OptimisticGovernorDeployed(owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): OptimisticGovernorDeployedEventFilter;
        "OptimisticOracleChanged(address)"(newOptimisticOracleV3?: PromiseOrValue<string> | null): OptimisticOracleChangedEventFilter;
        OptimisticOracleChanged(newOptimisticOracleV3?: PromiseOrValue<string> | null): OptimisticOracleChangedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ProposalDeleted(bytes32,bytes32)"(proposalHash?: PromiseOrValue<BytesLike> | null, assertionId?: PromiseOrValue<BytesLike> | null): ProposalDeletedEventFilter;
        ProposalDeleted(proposalHash?: PromiseOrValue<BytesLike> | null, assertionId?: PromiseOrValue<BytesLike> | null): ProposalDeletedEventFilter;
        "ProposalExecuted(bytes32,bytes32)"(proposalHash?: PromiseOrValue<BytesLike> | null, assertionId?: PromiseOrValue<BytesLike> | null): ProposalExecutedEventFilter;
        ProposalExecuted(proposalHash?: PromiseOrValue<BytesLike> | null, assertionId?: PromiseOrValue<BytesLike> | null): ProposalExecutedEventFilter;
        "SetCollateralAndBond(address,uint256)"(collateral?: PromiseOrValue<string> | null, bondAmount?: PromiseOrValue<BigNumberish> | null): SetCollateralAndBondEventFilter;
        SetCollateralAndBond(collateral?: PromiseOrValue<string> | null, bondAmount?: PromiseOrValue<BigNumberish> | null): SetCollateralAndBondEventFilter;
        "SetEscalationManager(address)"(escalationManager?: PromiseOrValue<string> | null): SetEscalationManagerEventFilter;
        SetEscalationManager(escalationManager?: PromiseOrValue<string> | null): SetEscalationManagerEventFilter;
        "SetIdentifier(bytes32)"(identifier?: PromiseOrValue<BytesLike> | null): SetIdentifierEventFilter;
        SetIdentifier(identifier?: PromiseOrValue<BytesLike> | null): SetIdentifierEventFilter;
        "SetLiveness(uint64)"(liveness?: PromiseOrValue<BigNumberish> | null): SetLivenessEventFilter;
        SetLiveness(liveness?: PromiseOrValue<BigNumberish> | null): SetLivenessEventFilter;
        "SetRules(string)"(rules?: null): SetRulesEventFilter;
        SetRules(rules?: null): SetRulesEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        "TransactionExecuted(bytes32,bytes32,uint256)"(proposalHash?: PromiseOrValue<BytesLike> | null, assertionId?: PromiseOrValue<BytesLike> | null, transactionIndex?: PromiseOrValue<BigNumberish> | null): TransactionExecutedEventFilter;
        TransactionExecuted(proposalHash?: PromiseOrValue<BytesLike> | null, assertionId?: PromiseOrValue<BytesLike> | null, transactionIndex?: PromiseOrValue<BigNumberish> | null): TransactionExecutedEventFilter;
        "TransactionsProposed(address,uint256,bytes32,tuple,bytes32,bytes,string,uint256)"(proposer?: PromiseOrValue<string> | null, proposalTime?: PromiseOrValue<BigNumberish> | null, assertionId?: PromiseOrValue<BytesLike> | null, proposal?: null, proposalHash?: null, explanation?: null, rules?: null, challengeWindowEnds?: null): TransactionsProposedEventFilter;
        TransactionsProposed(proposer?: PromiseOrValue<string> | null, proposalTime?: PromiseOrValue<BigNumberish> | null, assertionId?: PromiseOrValue<BytesLike> | null, proposal?: null, proposalHash?: null, explanation?: null, rules?: null, challengeWindowEnds?: null): TransactionsProposedEventFilter;
    };
    estimateGas: {
        EXPLANATION_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        PROPOSAL_HASH_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        RULES_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        assertionDisputedCallback(assertionId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        assertionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        assertionResolvedCallback(assertionId: PromiseOrValue<BytesLike>, assertedTruthfully: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        bondAmount(overrides?: CallOverrides): Promise<BigNumber>;
        collateral(overrides?: CallOverrides): Promise<BigNumber>;
        deleteProposalOnUpgrade(proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        escalationManager(overrides?: CallOverrides): Promise<BigNumber>;
        executeProposal(transactions: OptimisticGovernor.TransactionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finder(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        getProposalBond(overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        identifier(overrides?: CallOverrides): Promise<BigNumber>;
        liveness(overrides?: CallOverrides): Promise<BigNumber>;
        optimisticOracleV3(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proposalHashes(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        proposeTransactions(transactions: OptimisticGovernor.TransactionStruct[], explanation: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rules(overrides?: CallOverrides): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCollateralAndBond(_collateral: PromiseOrValue<string>, _bondAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEscalationManager(_escalationManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIdentifier(_identifier: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiveness(_liveness: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRules(_rules: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        EXPLANATION_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PROPOSAL_HASH_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RULES_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assertionDisputedCallback(assertionId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        assertionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assertionResolvedCallback(assertionId: PromiseOrValue<BytesLike>, assertedTruthfully: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bondAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deleteProposalOnUpgrade(proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        escalationManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeProposal(transactions: OptimisticGovernor.TransactionStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalBond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liveness(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        optimisticOracleV3(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalHashes(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeTransactions(transactions: OptimisticGovernor.TransactionStruct[], explanation: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCollateralAndBond(_collateral: PromiseOrValue<string>, _bondAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEscalationManager(_escalationManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIdentifier(_identifier: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiveness(_liveness: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRules(_rules: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
