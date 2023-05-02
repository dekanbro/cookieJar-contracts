import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ScopeGuardInterface extends utils.Interface {
    functions: {
        "allowedTargets(address)": FunctionFragment;
        "checkAfterExecution(bytes32,bool)": FunctionFragment;
        "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)": FunctionFragment;
        "isAllowedFunction(address,bytes4)": FunctionFragment;
        "isAllowedTarget(address)": FunctionFragment;
        "isAllowedToDelegateCall(address)": FunctionFragment;
        "isScoped(address)": FunctionFragment;
        "isValueAllowed(address)": FunctionFragment;
        "isfallbackAllowed(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAllowedFunction(address,bytes4,bool)": FunctionFragment;
        "setDelegateCallAllowedOnTarget(address,bool)": FunctionFragment;
        "setFallbackAllowedOnTarget(address,bool)": FunctionFragment;
        "setScoped(address,bool)": FunctionFragment;
        "setTargetAllowed(address,bool)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "setValueAllowedOnTarget(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowedTargets" | "checkAfterExecution" | "checkTransaction" | "isAllowedFunction" | "isAllowedTarget" | "isAllowedToDelegateCall" | "isScoped" | "isValueAllowed" | "isfallbackAllowed" | "owner" | "renounceOwnership" | "setAllowedFunction" | "setDelegateCallAllowedOnTarget" | "setFallbackAllowedOnTarget" | "setScoped" | "setTargetAllowed" | "setUp" | "setValueAllowedOnTarget" | "supportsInterface" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowedTargets", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "checkAfterExecution", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "checkTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isAllowedFunction", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isAllowedTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAllowedToDelegateCall", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isScoped", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isValueAllowed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isfallbackAllowed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAllowedFunction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "setDelegateCallAllowedOnTarget", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setFallbackAllowedOnTarget", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setScoped", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setTargetAllowed", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setValueAllowedOnTarget", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allowedTargets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAfterExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAllowedFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAllowedTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAllowedToDelegateCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isScoped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValueAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isfallbackAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowedFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegateCallAllowedOnTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackAllowedOnTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setScoped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTargetAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValueAllowedOnTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "ScopeGuardSetup(address,address)": EventFragment;
        "SetDelegateCallAllowedOnTarget(address,bool)": EventFragment;
        "SetFallbackAllowedOnTarget(address,bool)": EventFragment;
        "SetFunctionAllowedOnTarget(address,bytes4,bool)": EventFragment;
        "SetTargetAllowed(address,bool)": EventFragment;
        "SetTargetScoped(address,bool)": EventFragment;
        "SetValueAllowedOnTarget(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeGuardSetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDelegateCallAllowedOnTarget"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFallbackAllowedOnTarget"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFunctionAllowedOnTarget"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTargetAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTargetScoped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetValueAllowedOnTarget"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ScopeGuardSetupEventObject {
    initiator: string;
    owner: string;
}
export type ScopeGuardSetupEvent = TypedEvent<[
    string,
    string
], ScopeGuardSetupEventObject>;
export type ScopeGuardSetupEventFilter = TypedEventFilter<ScopeGuardSetupEvent>;
export interface SetDelegateCallAllowedOnTargetEventObject {
    target: string;
    allowed: boolean;
}
export type SetDelegateCallAllowedOnTargetEvent = TypedEvent<[
    string,
    boolean
], SetDelegateCallAllowedOnTargetEventObject>;
export type SetDelegateCallAllowedOnTargetEventFilter = TypedEventFilter<SetDelegateCallAllowedOnTargetEvent>;
export interface SetFallbackAllowedOnTargetEventObject {
    target: string;
    allowed: boolean;
}
export type SetFallbackAllowedOnTargetEvent = TypedEvent<[
    string,
    boolean
], SetFallbackAllowedOnTargetEventObject>;
export type SetFallbackAllowedOnTargetEventFilter = TypedEventFilter<SetFallbackAllowedOnTargetEvent>;
export interface SetFunctionAllowedOnTargetEventObject {
    target: string;
    functionSig: string;
    allowed: boolean;
}
export type SetFunctionAllowedOnTargetEvent = TypedEvent<[
    string,
    string,
    boolean
], SetFunctionAllowedOnTargetEventObject>;
export type SetFunctionAllowedOnTargetEventFilter = TypedEventFilter<SetFunctionAllowedOnTargetEvent>;
export interface SetTargetAllowedEventObject {
    target: string;
    allowed: boolean;
}
export type SetTargetAllowedEvent = TypedEvent<[
    string,
    boolean
], SetTargetAllowedEventObject>;
export type SetTargetAllowedEventFilter = TypedEventFilter<SetTargetAllowedEvent>;
export interface SetTargetScopedEventObject {
    target: string;
    scoped: boolean;
}
export type SetTargetScopedEvent = TypedEvent<[
    string,
    boolean
], SetTargetScopedEventObject>;
export type SetTargetScopedEventFilter = TypedEventFilter<SetTargetScopedEvent>;
export interface SetValueAllowedOnTargetEventObject {
    target: string;
    allowed: boolean;
}
export type SetValueAllowedOnTargetEvent = TypedEvent<[
    string,
    boolean
], SetValueAllowedOnTargetEventObject>;
export type SetValueAllowedOnTargetEventFilter = TypedEventFilter<SetValueAllowedOnTargetEvent>;
export interface ScopeGuard extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ScopeGuardInterface;
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
        allowedTargets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            boolean,
            boolean,
            boolean
        ] & {
            allowed: boolean;
            scoped: boolean;
            delegateCallAllowed: boolean;
            fallbackAllowed: boolean;
            valueAllowed: boolean;
        }>;
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, arg10: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        isAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isAllowedTarget(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isAllowedToDelegateCall(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isScoped(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isValueAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isfallbackAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDelegateCallAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFallbackAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setScoped(target: PromiseOrValue<string>, scoped: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTargetAllowed(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setValueAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowedTargets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
    ] & {
        allowed: boolean;
        scoped: boolean;
        delegateCallAllowed: boolean;
        fallbackAllowed: boolean;
        valueAllowed: boolean;
    }>;
    checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, arg10: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    isAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isAllowedTarget(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAllowedToDelegateCall(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isScoped(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isValueAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isfallbackAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDelegateCallAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFallbackAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setScoped(target: PromiseOrValue<string>, scoped: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTargetAllowed(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setValueAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowedTargets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            boolean,
            boolean,
            boolean
        ] & {
            allowed: boolean;
            scoped: boolean;
            delegateCallAllowed: boolean;
            fallbackAllowed: boolean;
            valueAllowed: boolean;
        }>;
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, arg10: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isAllowedTarget(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAllowedToDelegateCall(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isScoped(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isValueAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isfallbackAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDelegateCallAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setFallbackAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setScoped(target: PromiseOrValue<string>, scoped: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setTargetAllowed(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setValueAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ScopeGuardSetup(address,address)"(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null): ScopeGuardSetupEventFilter;
        ScopeGuardSetup(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null): ScopeGuardSetupEventFilter;
        "SetDelegateCallAllowedOnTarget(address,bool)"(target?: null, allowed?: null): SetDelegateCallAllowedOnTargetEventFilter;
        SetDelegateCallAllowedOnTarget(target?: null, allowed?: null): SetDelegateCallAllowedOnTargetEventFilter;
        "SetFallbackAllowedOnTarget(address,bool)"(target?: null, allowed?: null): SetFallbackAllowedOnTargetEventFilter;
        SetFallbackAllowedOnTarget(target?: null, allowed?: null): SetFallbackAllowedOnTargetEventFilter;
        "SetFunctionAllowedOnTarget(address,bytes4,bool)"(target?: null, functionSig?: null, allowed?: null): SetFunctionAllowedOnTargetEventFilter;
        SetFunctionAllowedOnTarget(target?: null, functionSig?: null, allowed?: null): SetFunctionAllowedOnTargetEventFilter;
        "SetTargetAllowed(address,bool)"(target?: null, allowed?: null): SetTargetAllowedEventFilter;
        SetTargetAllowed(target?: null, allowed?: null): SetTargetAllowedEventFilter;
        "SetTargetScoped(address,bool)"(target?: null, scoped?: null): SetTargetScopedEventFilter;
        SetTargetScoped(target?: null, scoped?: null): SetTargetScopedEventFilter;
        "SetValueAllowedOnTarget(address,bool)"(target?: null, allowed?: null): SetValueAllowedOnTargetEventFilter;
        SetValueAllowedOnTarget(target?: null, allowed?: null): SetValueAllowedOnTargetEventFilter;
    };
    estimateGas: {
        allowedTargets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, arg10: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isAllowedTarget(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAllowedToDelegateCall(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isScoped(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isValueAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isfallbackAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDelegateCallAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFallbackAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setScoped(target: PromiseOrValue<string>, scoped: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTargetAllowed(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setValueAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowedTargets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAfterExecution(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BigNumberish>, arg5: PromiseOrValue<BigNumberish>, arg6: PromiseOrValue<BigNumberish>, arg7: PromiseOrValue<string>, arg8: PromiseOrValue<string>, arg9: PromiseOrValue<BytesLike>, arg10: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAllowedTarget(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAllowedToDelegateCall(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isScoped(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValueAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isfallbackAllowed(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAllowedFunction(target: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDelegateCallAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFallbackAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setScoped(target: PromiseOrValue<string>, scoped: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTargetAllowed(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setValueAllowedOnTarget(target: PromiseOrValue<string>, allow: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
