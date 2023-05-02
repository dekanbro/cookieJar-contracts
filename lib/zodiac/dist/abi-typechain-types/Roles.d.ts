import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface RolesInterface extends utils.Interface {
    functions: {
        "allowTarget(uint16,address,uint8)": FunctionFragment;
        "assignRoles(address,uint16[],bool[])": FunctionFragment;
        "avatar()": FunctionFragment;
        "defaultRoles(address)": FunctionFragment;
        "disableModule(address,address)": FunctionFragment;
        "enableModule(address)": FunctionFragment;
        "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
        "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
        "execTransactionWithRole(address,uint256,bytes,uint8,uint16,bool)": FunctionFragment;
        "execTransactionWithRoleReturnData(address,uint256,bytes,uint8,uint16,bool)": FunctionFragment;
        "getGuard()": FunctionFragment;
        "getModulesPaginated(address,uint256)": FunctionFragment;
        "guard()": FunctionFragment;
        "isModuleEnabled(address)": FunctionFragment;
        "multisend()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "revokeTarget(uint16,address)": FunctionFragment;
        "scopeAllowFunction(uint16,address,bytes4,uint8)": FunctionFragment;
        "scopeFunction(uint16,address,bytes4,bool[],uint8[],uint8[],bytes[],uint8)": FunctionFragment;
        "scopeFunctionExecutionOptions(uint16,address,bytes4,uint8)": FunctionFragment;
        "scopeParameter(uint16,address,bytes4,uint256,uint8,uint8,bytes)": FunctionFragment;
        "scopeParameterAsOneOf(uint16,address,bytes4,uint256,uint8,bytes[])": FunctionFragment;
        "scopeRevokeFunction(uint16,address,bytes4)": FunctionFragment;
        "scopeTarget(uint16,address)": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setDefaultRole(address,uint16)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setMultisend(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "target()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unscopeParameter(uint16,address,bytes4,uint8)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowTarget" | "assignRoles" | "avatar" | "defaultRoles" | "disableModule" | "enableModule" | "execTransactionFromModule" | "execTransactionFromModuleReturnData" | "execTransactionWithRole" | "execTransactionWithRoleReturnData" | "getGuard" | "getModulesPaginated" | "guard" | "isModuleEnabled" | "multisend" | "owner" | "renounceOwnership" | "revokeTarget" | "scopeAllowFunction" | "scopeFunction" | "scopeFunctionExecutionOptions" | "scopeParameter" | "scopeParameterAsOneOf" | "scopeRevokeFunction" | "scopeTarget" | "setAvatar" | "setDefaultRole" | "setGuard" | "setMultisend" | "setTarget" | "setUp" | "target" | "transferOwnership" | "unscopeParameter"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowTarget", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "assignRoles", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>[]
    ]): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultRoles", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "disableModule", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enableModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModuleReturnData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionWithRole", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionWithRoleReturnData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModulesPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "isModuleEnabled", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "multisend", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokeTarget", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "scopeAllowFunction", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "scopeFunction", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "scopeFunctionExecutionOptions", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "scopeParameter", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "scopeParameterAsOneOf", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "scopeRevokeFunction", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "scopeTarget", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDefaultRole", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setMultisend", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unscopeParameter", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "allowTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assignRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModuleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionWithRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionWithRoleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModulesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multisend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeAllowFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeFunctionExecutionOptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeParameter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeParameterAsOneOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeRevokeFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scopeTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMultisend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unscopeParameter", data: BytesLike): Result;
    events: {
        "AssignRoles(address,uint16[],bool[])": EventFragment;
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "DisabledModule(address)": EventFragment;
        "EnabledModule(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RolesModSetup(address,address,address,address)": EventFragment;
        "SetDefaultRole(address,uint16)": EventFragment;
        "SetMultisendAddress(address)": EventFragment;
        "TargetSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssignRoles"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RolesModSetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetDefaultRole"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMultisendAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
}
export interface AssignRolesEventObject {
    module: string;
    roles: number[];
    memberOf: boolean[];
}
export type AssignRolesEvent = TypedEvent<[
    string,
    number[],
    boolean[]
], AssignRolesEventObject>;
export type AssignRolesEventFilter = TypedEventFilter<AssignRolesEvent>;
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
export interface DisabledModuleEventObject {
    module: string;
}
export type DisabledModuleEvent = TypedEvent<[
    string
], DisabledModuleEventObject>;
export type DisabledModuleEventFilter = TypedEventFilter<DisabledModuleEvent>;
export interface EnabledModuleEventObject {
    module: string;
}
export type EnabledModuleEvent = TypedEvent<[string], EnabledModuleEventObject>;
export type EnabledModuleEventFilter = TypedEventFilter<EnabledModuleEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RolesModSetupEventObject {
    initiator: string;
    owner: string;
    avatar: string;
    target: string;
}
export type RolesModSetupEvent = TypedEvent<[
    string,
    string,
    string,
    string
], RolesModSetupEventObject>;
export type RolesModSetupEventFilter = TypedEventFilter<RolesModSetupEvent>;
export interface SetDefaultRoleEventObject {
    module: string;
    defaultRole: number;
}
export type SetDefaultRoleEvent = TypedEvent<[
    string,
    number
], SetDefaultRoleEventObject>;
export type SetDefaultRoleEventFilter = TypedEventFilter<SetDefaultRoleEvent>;
export interface SetMultisendAddressEventObject {
    multisendAddress: string;
}
export type SetMultisendAddressEvent = TypedEvent<[
    string
], SetMultisendAddressEventObject>;
export type SetMultisendAddressEventFilter = TypedEventFilter<SetMultisendAddressEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface Roles extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RolesInterface;
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
        allowTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        assignRoles(module: PromiseOrValue<string>, _roles: PromiseOrValue<BigNumberish>[], memberOf: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        defaultRoles(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionWithRole(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionWithRoleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        multisend(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeAllowFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, isParamScoped: PromiseOrValue<boolean>[], paramType: PromiseOrValue<BigNumberish>[], paramComp: PromiseOrValue<BigNumberish>[], compValue: PromiseOrValue<BytesLike>[], options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeFunctionExecutionOptions(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, paramComp: PromiseOrValue<BigNumberish>, compValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeParameterAsOneOf(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, compValues: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeRevokeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scopeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultRole(module: PromiseOrValue<string>, role: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unscopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    assignRoles(module: PromiseOrValue<string>, _roles: PromiseOrValue<BigNumberish>[], memberOf: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    avatar(overrides?: CallOverrides): Promise<string>;
    defaultRoles(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionWithRole(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionWithRoleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    guard(overrides?: CallOverrides): Promise<string>;
    isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    multisend(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeAllowFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, isParamScoped: PromiseOrValue<boolean>[], paramType: PromiseOrValue<BigNumberish>[], paramComp: PromiseOrValue<BigNumberish>[], compValue: PromiseOrValue<BytesLike>[], options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeFunctionExecutionOptions(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, paramComp: PromiseOrValue<BigNumberish>, compValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeParameterAsOneOf(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, compValues: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeRevokeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scopeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultRole(module: PromiseOrValue<string>, role: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unscopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, options: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        assignRoles(module: PromiseOrValue<string>, _roles: PromiseOrValue<BigNumberish>[], memberOf: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        avatar(overrides?: CallOverrides): Promise<string>;
        defaultRoles(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        enableModule(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string]>;
        execTransactionWithRole(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionWithRoleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        guard(overrides?: CallOverrides): Promise<string>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        multisend(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        revokeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        scopeAllowFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        scopeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, isParamScoped: PromiseOrValue<boolean>[], paramType: PromiseOrValue<BigNumberish>[], paramComp: PromiseOrValue<BigNumberish>[], compValue: PromiseOrValue<BytesLike>[], options: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        scopeFunctionExecutionOptions(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        scopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, paramComp: PromiseOrValue<BigNumberish>, compValue: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        scopeParameterAsOneOf(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, compValues: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        scopeRevokeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        scopeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDefaultRole(module: PromiseOrValue<string>, role: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unscopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssignRoles(address,uint16[],bool[])"(module?: null, roles?: null, memberOf?: null): AssignRolesEventFilter;
        AssignRoles(module?: null, roles?: null, memberOf?: null): AssignRolesEventFilter;
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "DisabledModule(address)"(module?: null): DisabledModuleEventFilter;
        DisabledModule(module?: null): DisabledModuleEventFilter;
        "EnabledModule(address)"(module?: null): EnabledModuleEventFilter;
        EnabledModule(module?: null): EnabledModuleEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "RolesModSetup(address,address,address,address)"(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): RolesModSetupEventFilter;
        RolesModSetup(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): RolesModSetupEventFilter;
        "SetDefaultRole(address,uint16)"(module?: null, defaultRole?: null): SetDefaultRoleEventFilter;
        SetDefaultRole(module?: null, defaultRole?: null): SetDefaultRoleEventFilter;
        "SetMultisendAddress(address)"(multisendAddress?: null): SetMultisendAddressEventFilter;
        SetMultisendAddress(multisendAddress?: null): SetMultisendAddressEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
    };
    estimateGas: {
        allowTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        assignRoles(module: PromiseOrValue<string>, _roles: PromiseOrValue<BigNumberish>[], memberOf: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        defaultRoles(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionWithRole(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionWithRoleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        multisend(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeAllowFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, isParamScoped: PromiseOrValue<boolean>[], paramType: PromiseOrValue<BigNumberish>[], paramComp: PromiseOrValue<BigNumberish>[], compValue: PromiseOrValue<BytesLike>[], options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeFunctionExecutionOptions(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, paramComp: PromiseOrValue<BigNumberish>, compValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeParameterAsOneOf(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, compValues: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeRevokeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scopeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultRole(module: PromiseOrValue<string>, role: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unscopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        assignRoles(module: PromiseOrValue<string>, _roles: PromiseOrValue<BigNumberish>[], memberOf: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultRoles(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionWithRole(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionWithRoleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, role: PromiseOrValue<BigNumberish>, shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multisend(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeAllowFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, isParamScoped: PromiseOrValue<boolean>[], paramType: PromiseOrValue<BigNumberish>[], paramComp: PromiseOrValue<BigNumberish>[], compValue: PromiseOrValue<BytesLike>[], options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeFunctionExecutionOptions(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, options: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, paramComp: PromiseOrValue<BigNumberish>, compValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeParameterAsOneOf(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, paramType: PromiseOrValue<BigNumberish>, compValues: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeRevokeFunction(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scopeTarget(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultRole(module: PromiseOrValue<string>, role: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unscopeParameter(role: PromiseOrValue<BigNumberish>, targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, paramIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
