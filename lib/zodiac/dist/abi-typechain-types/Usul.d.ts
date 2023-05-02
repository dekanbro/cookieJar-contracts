import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface UsulInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR_TYPEHASH()": FunctionFragment;
        "TRANSACTION_TYPEHASH()": FunctionFragment;
        "avatar()": FunctionFragment;
        "cancelProposals(uint256[])": FunctionFragment;
        "disableStrategy(address,address)": FunctionFragment;
        "enableStrategy(address)": FunctionFragment;
        "executeProposalBatch(uint256,address[],uint256[],bytes[],uint8[])": FunctionFragment;
        "executeProposalByIndex(uint256,address,uint256,bytes,uint8)": FunctionFragment;
        "generateTransactionHashData(address,uint256,bytes,uint8,uint256)": FunctionFragment;
        "getGuard()": FunctionFragment;
        "getStrategiesPaginated(address,uint256)": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8)": FunctionFragment;
        "getTxHash(uint256,uint256)": FunctionFragment;
        "guard()": FunctionFragment;
        "isStrategyEnabled(address)": FunctionFragment;
        "isTxExecuted(uint256,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "receiveStrategy(uint256,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "submitProposal(bytes32[],address,bytes)": FunctionFragment;
        "target()": FunctionFragment;
        "totalProposalCount()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR_TYPEHASH" | "TRANSACTION_TYPEHASH" | "avatar" | "cancelProposals" | "disableStrategy" | "enableStrategy" | "executeProposalBatch" | "executeProposalByIndex" | "generateTransactionHashData" | "getGuard" | "getStrategiesPaginated" | "getTransactionHash" | "getTxHash" | "guard" | "isStrategyEnabled" | "isTxExecuted" | "owner" | "proposals" | "receiveStrategy" | "renounceOwnership" | "setAvatar" | "setGuard" | "setTarget" | "setUp" | "state" | "submitProposal" | "target" | "totalProposalCount" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "TRANSACTION_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelProposals", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "disableStrategy", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enableStrategy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "executeProposalBatch", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "executeProposalByIndex", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "generateTransactionHashData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStrategiesPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTxHash", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "isStrategyEnabled", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTxExecuted", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "receiveStrategy", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "state", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "submitProposal", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalProposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TRANSACTION_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposalBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposalByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateTransactionHashData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategiesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTxHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStrategyEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTxExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalProposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "DisabledStrategy(address)": EventFragment;
        "EnabledStrategy(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(address,uint256,address)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "StrategyFinalized(uint256,uint256)": EventFragment;
        "TargetSet(address,address)": EventFragment;
        "TransactionExecuted(uint256,bytes32)": EventFragment;
        "TransactionExecutedBatch(uint256,uint256)": EventFragment;
        "UsulSetup(address,address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisabledStrategy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledStrategy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyFinalized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionExecutedBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UsulSetup"): EventFragment;
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
export interface DisabledStrategyEventObject {
    strategy: string;
}
export type DisabledStrategyEvent = TypedEvent<[
    string
], DisabledStrategyEventObject>;
export type DisabledStrategyEventFilter = TypedEventFilter<DisabledStrategyEvent>;
export interface EnabledStrategyEventObject {
    strategy: string;
}
export type EnabledStrategyEvent = TypedEvent<[
    string
], EnabledStrategyEventObject>;
export type EnabledStrategyEventFilter = TypedEventFilter<EnabledStrategyEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposalCanceledEventObject {
    proposalId: BigNumber;
}
export type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    strategy: string;
    proposalNumber: BigNumber;
    proposer: string;
}
export type ProposalCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], ProposalCreatedEventObject>;
export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalExecutedEventObject {
    id: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface StrategyFinalizedEventObject {
    proposalId: BigNumber;
    endDate: BigNumber;
}
export type StrategyFinalizedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], StrategyFinalizedEventObject>;
export type StrategyFinalizedEventFilter = TypedEventFilter<StrategyFinalizedEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface TransactionExecutedEventObject {
    proposalId: BigNumber;
    txHash: string;
}
export type TransactionExecutedEvent = TypedEvent<[
    BigNumber,
    string
], TransactionExecutedEventObject>;
export type TransactionExecutedEventFilter = TypedEventFilter<TransactionExecutedEvent>;
export interface TransactionExecutedBatchEventObject {
    startIndex: BigNumber;
    endIndex: BigNumber;
}
export type TransactionExecutedBatchEvent = TypedEvent<[
    BigNumber,
    BigNumber
], TransactionExecutedBatchEventObject>;
export type TransactionExecutedBatchEventFilter = TypedEventFilter<TransactionExecutedBatchEvent>;
export interface UsulSetupEventObject {
    initiator: string;
    owner: string;
    avatar: string;
    target: string;
}
export type UsulSetupEvent = TypedEvent<[
    string,
    string,
    string,
    string
], UsulSetupEventObject>;
export type UsulSetupEventFilter = TypedEventFilter<UsulSetupEvent>;
export interface Usul extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UsulInterface;
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
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        cancelProposals(proposalIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        disableStrategy(prevStrategy: PromiseOrValue<string>, strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeProposalBatch(proposalId: PromiseOrValue<BigNumberish>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>[], operations: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeProposalByIndex(proposalId: PromiseOrValue<BigNumberish>, target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        getStrategiesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTxHash(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        isStrategyEnabled(_strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isTxExecuted(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            string
        ] & {
            canceled: boolean;
            timeLockPeriod: BigNumber;
            executionCounter: BigNumber;
            strategy: string;
        }>;
        receiveStrategy(proposalId: PromiseOrValue<BigNumberish>, timeLockPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        submitProposal(txHashes: PromiseOrValue<BytesLike>[], strategy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        totalProposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    avatar(overrides?: CallOverrides): Promise<string>;
    cancelProposals(proposalIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    disableStrategy(prevStrategy: PromiseOrValue<string>, strategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeProposalBatch(proposalId: PromiseOrValue<BigNumberish>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>[], operations: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeProposalByIndex(proposalId: PromiseOrValue<BigNumberish>, target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    getStrategiesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTxHash(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    isStrategyEnabled(_strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isTxExecuted(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        BigNumber,
        string
    ] & {
        canceled: boolean;
        timeLockPeriod: BigNumber;
        executionCounter: BigNumber;
        strategy: string;
    }>;
    receiveStrategy(proposalId: PromiseOrValue<BigNumberish>, timeLockPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    submitProposal(txHashes: PromiseOrValue<BytesLike>[], strategy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    totalProposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        avatar(overrides?: CallOverrides): Promise<string>;
        cancelProposals(proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        disableStrategy(prevStrategy: PromiseOrValue<string>, strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        enableStrategy(strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        executeProposalBatch(proposalId: PromiseOrValue<BigNumberish>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>[], operations: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        executeProposalByIndex(proposalId: PromiseOrValue<BigNumberish>, target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        getStrategiesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTxHash(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        isStrategyEnabled(_strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isTxExecuted(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            string
        ] & {
            canceled: boolean;
            timeLockPeriod: BigNumber;
            executionCounter: BigNumber;
            strategy: string;
        }>;
        receiveStrategy(proposalId: PromiseOrValue<BigNumberish>, timeLockPeriod: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        submitProposal(txHashes: PromiseOrValue<BytesLike>[], strategy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        totalProposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "DisabledStrategy(address)"(strategy?: null): DisabledStrategyEventFilter;
        DisabledStrategy(strategy?: null): DisabledStrategyEventFilter;
        "EnabledStrategy(address)"(strategy?: null): EnabledStrategyEventFilter;
        EnabledStrategy(strategy?: null): EnabledStrategyEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ProposalCanceled(uint256)"(proposalId?: null): ProposalCanceledEventFilter;
        ProposalCanceled(proposalId?: null): ProposalCanceledEventFilter;
        "ProposalCreated(address,uint256,address)"(strategy?: null, proposalNumber?: null, proposer?: null): ProposalCreatedEventFilter;
        ProposalCreated(strategy?: null, proposalNumber?: null, proposer?: null): ProposalCreatedEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "StrategyFinalized(uint256,uint256)"(proposalId?: null, endDate?: null): StrategyFinalizedEventFilter;
        StrategyFinalized(proposalId?: null, endDate?: null): StrategyFinalizedEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        "TransactionExecuted(uint256,bytes32)"(proposalId?: null, txHash?: null): TransactionExecutedEventFilter;
        TransactionExecuted(proposalId?: null, txHash?: null): TransactionExecutedEventFilter;
        "TransactionExecutedBatch(uint256,uint256)"(startIndex?: null, endIndex?: null): TransactionExecutedBatchEventFilter;
        TransactionExecutedBatch(startIndex?: null, endIndex?: null): TransactionExecutedBatchEventFilter;
        "UsulSetup(address,address,address,address)"(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): UsulSetupEventFilter;
        UsulSetup(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): UsulSetupEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        cancelProposals(proposalIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        disableStrategy(prevStrategy: PromiseOrValue<string>, strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeProposalBatch(proposalId: PromiseOrValue<BigNumberish>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>[], operations: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeProposalByIndex(proposalId: PromiseOrValue<BigNumberish>, target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        getStrategiesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTxHash(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        isStrategyEnabled(_strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isTxExecuted(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        receiveStrategy(proposalId: PromiseOrValue<BigNumberish>, timeLockPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        submitProposal(txHashes: PromiseOrValue<BytesLike>[], strategy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        totalProposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelProposals(proposalIds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        disableStrategy(prevStrategy: PromiseOrValue<string>, strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableStrategy(strategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeProposalBatch(proposalId: PromiseOrValue<BigNumberish>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], data: PromiseOrValue<BytesLike>[], operations: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeProposalByIndex(proposalId: PromiseOrValue<BigNumberish>, target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrategiesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTxHash(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStrategyEnabled(_strategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTxExecuted(proposalId: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveStrategy(proposalId: PromiseOrValue<BigNumberish>, timeLockPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submitProposal(txHashes: PromiseOrValue<BytesLike>[], strategy: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalProposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
