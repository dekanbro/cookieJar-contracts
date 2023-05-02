import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface TellorInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR_TYPEHASH()": FunctionFragment;
        "INVALIDATED()": FunctionFragment;
        "TRANSACTION_TYPEHASH()": FunctionFragment;
        "addProposal(string,bytes32[])": FunctionFragment;
        "avatar()": FunctionFragment;
        "buildProposal(string,bytes32[])": FunctionFragment;
        "cooldown()": FunctionFragment;
        "executeProposal(string,bytes32[],address,uint256,bytes,uint8)": FunctionFragment;
        "executeProposalWithIndex(string,bytes32[],address,uint256,bytes,uint8,uint256)": FunctionFragment;
        "executedProposalTransactions(bytes32,bytes32)": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getDataAfter(bytes32,uint256)": FunctionFragment;
        "getDataBefore(bytes32,uint256)": FunctionFragment;
        "getGuard()": FunctionFragment;
        "getIndexForDataAfter(bytes32,uint256)": FunctionFragment;
        "getIndexForDataBefore(bytes32,uint256)": FunctionFragment;
        "getMultipleValuesBefore(bytes32,uint256,uint256,uint256)": FunctionFragment;
        "getNewValueCountbyQueryId(bytes32)": FunctionFragment;
        "getQueryId(string)": FunctionFragment;
        "getReporterByTimestamp(bytes32,uint256)": FunctionFragment;
        "getTimestampbyQueryIdandIndex(bytes32,uint256)": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8,uint256)": FunctionFragment;
        "guard()": FunctionFragment;
        "idMappingContract()": FunctionFragment;
        "isInDispute(bytes32,uint256)": FunctionFragment;
        "markProposalWithExpiredResultAsInvalid(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "queryIds(bytes32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "resultExpiration()": FunctionFragment;
        "retrieveData(bytes32,uint256)": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setIdMappingContract(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "target()": FunctionFragment;
        "tellor()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "valueFor(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR_TYPEHASH" | "INVALIDATED" | "TRANSACTION_TYPEHASH" | "addProposal" | "avatar" | "buildProposal" | "cooldown" | "executeProposal" | "executeProposalWithIndex" | "executedProposalTransactions" | "getChainId" | "getDataAfter" | "getDataBefore" | "getGuard" | "getIndexForDataAfter" | "getIndexForDataBefore" | "getMultipleValuesBefore" | "getNewValueCountbyQueryId" | "getQueryId" | "getReporterByTimestamp" | "getTimestampbyQueryIdandIndex" | "getTransactionHash" | "guard" | "idMappingContract" | "isInDispute" | "markProposalWithExpiredResultAsInvalid" | "owner" | "queryIds" | "renounceOwnership" | "resultExpiration" | "retrieveData" | "setAvatar" | "setGuard" | "setIdMappingContract" | "setTarget" | "setUp" | "target" | "tellor" | "transferOwnership" | "valueFor"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "INVALIDATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "TRANSACTION_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "addProposal", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "buildProposal", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "cooldown", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "executeProposalWithIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "executedProposalTransactions", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDataAfter", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDataBefore", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIndexForDataAfter", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getIndexForDataBefore", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMultipleValuesBefore", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getNewValueCountbyQueryId", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getQueryId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReporterByTimestamp", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTimestampbyQueryIdandIndex", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "idMappingContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "isInDispute", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "markProposalWithExpiredResultAsInvalid", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "queryIds", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "resultExpiration", values?: undefined): string;
    encodeFunctionData(functionFragment: "retrieveData", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIdMappingContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "tellor", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "valueFor", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INVALIDATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TRANSACTION_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buildProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cooldown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposalWithIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executedProposalTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataAfter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataBefore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexForDataAfter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexForDataBefore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMultipleValuesBefore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNewValueCountbyQueryId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getQueryId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReporterByTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimestampbyQueryIdandIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "idMappingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markProposalWithExpiredResultAsInvalid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resultExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retrieveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIdMappingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tellor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "valueFor", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalAdded(bytes32,string)": EventFragment;
        "TargetSet(address,address)": EventFragment;
        "TellorModuleSetup(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TellorModuleSetup"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposalAddedEventObject {
    queryId: string;
    proposalId: string;
}
export type ProposalAddedEvent = TypedEvent<[
    string,
    string
], ProposalAddedEventObject>;
export type ProposalAddedEventFilter = TypedEventFilter<ProposalAddedEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface TellorModuleSetupEventObject {
    initiator: string;
    avatar: string;
    target: string;
}
export type TellorModuleSetupEvent = TypedEvent<[
    string,
    string,
    string
], TellorModuleSetupEventObject>;
export type TellorModuleSetupEventFilter = TypedEventFilter<TellorModuleSetupEvent>;
export interface Tellor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TellorInterface;
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
        INVALIDATED(overrides?: CallOverrides): Promise<[string]>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        addProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        buildProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[string]>;
        cooldown(overrides?: CallOverrides): Promise<[number]>;
        executeProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeProposalWithIndex(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            _value: string;
            _timestampRetrieved: BigNumber;
        }>;
        getDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            _value: string;
            _timestampRetrieved: BigNumber;
        }>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        getIndexForDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
            _found: boolean;
            _index: BigNumber;
        }>;
        getIndexForDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
            _found: boolean;
            _index: BigNumber;
        }>;
        getMultipleValuesBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, _maxAge: PromiseOrValue<BigNumberish>, _maxCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            _values: string[];
            _timestamps: BigNumber[];
        }>;
        getNewValueCountbyQueryId(_queryId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getQueryId(_proposalId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getReporterByTimestamp(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTimestampbyQueryIdandIndex(_queryId: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTransactionHash(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        idMappingContract(overrides?: CallOverrides): Promise<[string]>;
        isInDispute(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        markProposalWithExpiredResultAsInvalid(_proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        queryIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resultExpiration(overrides?: CallOverrides): Promise<[number]>;
        retrieveData(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIdMappingContract(_addy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(_initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        tellor(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        valueFor(_id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _value: BigNumber;
            _timestamp: BigNumber;
            _statusCode: BigNumber;
        }>;
    };
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    INVALIDATED(overrides?: CallOverrides): Promise<string>;
    TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    addProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    avatar(overrides?: CallOverrides): Promise<string>;
    buildProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string>;
    cooldown(overrides?: CallOverrides): Promise<number>;
    executeProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeProposalWithIndex(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        _value: string;
        _timestampRetrieved: BigNumber;
    }>;
    getDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        _value: string;
        _timestampRetrieved: BigNumber;
    }>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    getIndexForDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
        _found: boolean;
        _index: BigNumber;
    }>;
    getIndexForDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
        _found: boolean;
        _index: BigNumber;
    }>;
    getMultipleValuesBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, _maxAge: PromiseOrValue<BigNumberish>, _maxCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[]
    ] & {
        _values: string[];
        _timestamps: BigNumber[];
    }>;
    getNewValueCountbyQueryId(_queryId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getQueryId(_proposalId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getReporterByTimestamp(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTimestampbyQueryIdandIndex(_queryId: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTransactionHash(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    idMappingContract(overrides?: CallOverrides): Promise<string>;
    isInDispute(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    markProposalWithExpiredResultAsInvalid(_proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    queryIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resultExpiration(overrides?: CallOverrides): Promise<number>;
    retrieveData(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIdMappingContract(_addy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(_initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    tellor(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    valueFor(_id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _value: BigNumber;
        _timestamp: BigNumber;
        _statusCode: BigNumber;
    }>;
    callStatic: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        INVALIDATED(overrides?: CallOverrides): Promise<string>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        addProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        avatar(overrides?: CallOverrides): Promise<string>;
        buildProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string>;
        cooldown(overrides?: CallOverrides): Promise<number>;
        executeProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        executeProposalWithIndex(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _txIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            _value: string;
            _timestampRetrieved: BigNumber;
        }>;
        getDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            _value: string;
            _timestampRetrieved: BigNumber;
        }>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        getIndexForDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
            _found: boolean;
            _index: BigNumber;
        }>;
        getIndexForDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
            _found: boolean;
            _index: BigNumber;
        }>;
        getMultipleValuesBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, _maxAge: PromiseOrValue<BigNumberish>, _maxCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            _values: string[];
            _timestamps: BigNumber[];
        }>;
        getNewValueCountbyQueryId(_queryId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getQueryId(_proposalId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getReporterByTimestamp(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTimestampbyQueryIdandIndex(_queryId: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        idMappingContract(overrides?: CallOverrides): Promise<string>;
        isInDispute(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        markProposalWithExpiredResultAsInvalid(_proposalHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        queryIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        resultExpiration(overrides?: CallOverrides): Promise<number>;
        retrieveData(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setIdMappingContract(_addy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(_initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        tellor(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        valueFor(_id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _value: BigNumber;
            _timestamp: BigNumber;
            _statusCode: BigNumber;
        }>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ProposalAdded(bytes32,string)"(queryId?: PromiseOrValue<BytesLike> | null, proposalId?: PromiseOrValue<string> | null): ProposalAddedEventFilter;
        ProposalAdded(queryId?: PromiseOrValue<BytesLike> | null, proposalId?: PromiseOrValue<string> | null): ProposalAddedEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        "TellorModuleSetup(address,address,address)"(initiator?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): TellorModuleSetupEventFilter;
        TellorModuleSetup(initiator?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): TellorModuleSetupEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        INVALIDATED(overrides?: CallOverrides): Promise<BigNumber>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        addProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        buildProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        cooldown(overrides?: CallOverrides): Promise<BigNumber>;
        executeProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeProposalWithIndex(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        getIndexForDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getIndexForDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMultipleValuesBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, _maxAge: PromiseOrValue<BigNumberish>, _maxCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNewValueCountbyQueryId(_queryId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getQueryId(_proposalId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReporterByTimestamp(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTimestampbyQueryIdandIndex(_queryId: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        idMappingContract(overrides?: CallOverrides): Promise<BigNumber>;
        isInDispute(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        markProposalWithExpiredResultAsInvalid(_proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        queryIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resultExpiration(overrides?: CallOverrides): Promise<BigNumber>;
        retrieveData(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIdMappingContract(_addy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(_initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        tellor(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        valueFor(_id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INVALIDATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buildProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cooldown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeProposal(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeProposalWithIndex(_proposalId: PromiseOrValue<string>, _txHashes: PromiseOrValue<BytesLike>[], _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIndexForDataAfter(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIndexForDataBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMultipleValuesBefore(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, _maxAge: PromiseOrValue<BigNumberish>, _maxCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNewValueCountbyQueryId(_queryId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getQueryId(_proposalId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReporterByTimestamp(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimestampbyQueryIdandIndex(_queryId: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionHash(_to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operation: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        idMappingContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInDispute(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markProposalWithExpiredResultAsInvalid(_proposalHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resultExpiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        retrieveData(_queryId: PromiseOrValue<BytesLike>, _timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIdMappingContract(_addy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(_initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tellor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        valueFor(_id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
