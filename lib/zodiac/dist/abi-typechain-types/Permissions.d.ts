import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PermissionsInterface extends utils.Interface {
    functions: {
        "keyForCompValues(address,bytes4,uint256)": FunctionFragment;
        "keyForFunctions(address,bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "keyForCompValues" | "keyForFunctions"): FunctionFragment;
    encodeFunctionData(functionFragment: "keyForCompValues", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "keyForFunctions", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "keyForCompValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keyForFunctions", data: BytesLike): Result;
    events: {
        "AllowTarget(uint16,address,uint8)": EventFragment;
        "RevokeTarget(uint16,address)": EventFragment;
        "ScopeAllowFunction(uint16,address,bytes4,uint8,uint256)": EventFragment;
        "ScopeFunction(uint16,address,bytes4,bool[],uint8[],uint8[],bytes[],uint8,uint256)": EventFragment;
        "ScopeFunctionExecutionOptions(uint16,address,bytes4,uint8,uint256)": EventFragment;
        "ScopeParameter(uint16,address,bytes4,uint256,uint8,uint8,bytes,uint256)": EventFragment;
        "ScopeParameterAsOneOf(uint16,address,bytes4,uint256,uint8,bytes[],uint256)": EventFragment;
        "ScopeRevokeFunction(uint16,address,bytes4,uint256)": EventFragment;
        "ScopeTarget(uint16,address)": EventFragment;
        "UnscopeParameter(uint16,address,bytes4,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AllowTarget"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokeTarget"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeAllowFunction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeFunction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeFunctionExecutionOptions"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeParameter"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeParameterAsOneOf"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeRevokeFunction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScopeTarget"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnscopeParameter"): EventFragment;
}
export interface AllowTargetEventObject {
    role: number;
    targetAddress: string;
    options: number;
}
export type AllowTargetEvent = TypedEvent<[
    number,
    string,
    number
], AllowTargetEventObject>;
export type AllowTargetEventFilter = TypedEventFilter<AllowTargetEvent>;
export interface RevokeTargetEventObject {
    role: number;
    targetAddress: string;
}
export type RevokeTargetEvent = TypedEvent<[
    number,
    string
], RevokeTargetEventObject>;
export type RevokeTargetEventFilter = TypedEventFilter<RevokeTargetEvent>;
export interface ScopeAllowFunctionEventObject {
    role: number;
    targetAddress: string;
    selector: string;
    options: number;
    resultingScopeConfig: BigNumber;
}
export type ScopeAllowFunctionEvent = TypedEvent<[
    number,
    string,
    string,
    number,
    BigNumber
], ScopeAllowFunctionEventObject>;
export type ScopeAllowFunctionEventFilter = TypedEventFilter<ScopeAllowFunctionEvent>;
export interface ScopeFunctionEventObject {
    role: number;
    targetAddress: string;
    functionSig: string;
    isParamScoped: boolean[];
    paramType: number[];
    paramComp: number[];
    compValue: string[];
    options: number;
    resultingScopeConfig: BigNumber;
}
export type ScopeFunctionEvent = TypedEvent<[
    number,
    string,
    string,
    boolean[],
    number[],
    number[],
    string[],
    number,
    BigNumber
], ScopeFunctionEventObject>;
export type ScopeFunctionEventFilter = TypedEventFilter<ScopeFunctionEvent>;
export interface ScopeFunctionExecutionOptionsEventObject {
    role: number;
    targetAddress: string;
    functionSig: string;
    options: number;
    resultingScopeConfig: BigNumber;
}
export type ScopeFunctionExecutionOptionsEvent = TypedEvent<[
    number,
    string,
    string,
    number,
    BigNumber
], ScopeFunctionExecutionOptionsEventObject>;
export type ScopeFunctionExecutionOptionsEventFilter = TypedEventFilter<ScopeFunctionExecutionOptionsEvent>;
export interface ScopeParameterEventObject {
    role: number;
    targetAddress: string;
    functionSig: string;
    index: BigNumber;
    paramType: number;
    paramComp: number;
    compValue: string;
    resultingScopeConfig: BigNumber;
}
export type ScopeParameterEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    number,
    number,
    string,
    BigNumber
], ScopeParameterEventObject>;
export type ScopeParameterEventFilter = TypedEventFilter<ScopeParameterEvent>;
export interface ScopeParameterAsOneOfEventObject {
    role: number;
    targetAddress: string;
    functionSig: string;
    index: BigNumber;
    paramType: number;
    compValues: string[];
    resultingScopeConfig: BigNumber;
}
export type ScopeParameterAsOneOfEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    number,
    string[],
    BigNumber
], ScopeParameterAsOneOfEventObject>;
export type ScopeParameterAsOneOfEventFilter = TypedEventFilter<ScopeParameterAsOneOfEvent>;
export interface ScopeRevokeFunctionEventObject {
    role: number;
    targetAddress: string;
    selector: string;
    resultingScopeConfig: BigNumber;
}
export type ScopeRevokeFunctionEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], ScopeRevokeFunctionEventObject>;
export type ScopeRevokeFunctionEventFilter = TypedEventFilter<ScopeRevokeFunctionEvent>;
export interface ScopeTargetEventObject {
    role: number;
    targetAddress: string;
}
export type ScopeTargetEvent = TypedEvent<[
    number,
    string
], ScopeTargetEventObject>;
export type ScopeTargetEventFilter = TypedEventFilter<ScopeTargetEvent>;
export interface UnscopeParameterEventObject {
    role: number;
    targetAddress: string;
    functionSig: string;
    index: BigNumber;
    resultingScopeConfig: BigNumber;
}
export type UnscopeParameterEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], UnscopeParameterEventObject>;
export type UnscopeParameterEventFilter = TypedEventFilter<UnscopeParameterEvent>;
export interface Permissions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PermissionsInterface;
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
        keyForCompValues(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        keyForFunctions(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
    };
    keyForCompValues(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    keyForFunctions(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        keyForCompValues(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        keyForFunctions(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AllowTarget(uint16,address,uint8)"(role?: null, targetAddress?: null, options?: null): AllowTargetEventFilter;
        AllowTarget(role?: null, targetAddress?: null, options?: null): AllowTargetEventFilter;
        "RevokeTarget(uint16,address)"(role?: null, targetAddress?: null): RevokeTargetEventFilter;
        RevokeTarget(role?: null, targetAddress?: null): RevokeTargetEventFilter;
        "ScopeAllowFunction(uint16,address,bytes4,uint8,uint256)"(role?: null, targetAddress?: null, selector?: null, options?: null, resultingScopeConfig?: null): ScopeAllowFunctionEventFilter;
        ScopeAllowFunction(role?: null, targetAddress?: null, selector?: null, options?: null, resultingScopeConfig?: null): ScopeAllowFunctionEventFilter;
        "ScopeFunction(uint16,address,bytes4,bool[],uint8[],uint8[],bytes[],uint8,uint256)"(role?: null, targetAddress?: null, functionSig?: null, isParamScoped?: null, paramType?: null, paramComp?: null, compValue?: null, options?: null, resultingScopeConfig?: null): ScopeFunctionEventFilter;
        ScopeFunction(role?: null, targetAddress?: null, functionSig?: null, isParamScoped?: null, paramType?: null, paramComp?: null, compValue?: null, options?: null, resultingScopeConfig?: null): ScopeFunctionEventFilter;
        "ScopeFunctionExecutionOptions(uint16,address,bytes4,uint8,uint256)"(role?: null, targetAddress?: null, functionSig?: null, options?: null, resultingScopeConfig?: null): ScopeFunctionExecutionOptionsEventFilter;
        ScopeFunctionExecutionOptions(role?: null, targetAddress?: null, functionSig?: null, options?: null, resultingScopeConfig?: null): ScopeFunctionExecutionOptionsEventFilter;
        "ScopeParameter(uint16,address,bytes4,uint256,uint8,uint8,bytes,uint256)"(role?: null, targetAddress?: null, functionSig?: null, index?: null, paramType?: null, paramComp?: null, compValue?: null, resultingScopeConfig?: null): ScopeParameterEventFilter;
        ScopeParameter(role?: null, targetAddress?: null, functionSig?: null, index?: null, paramType?: null, paramComp?: null, compValue?: null, resultingScopeConfig?: null): ScopeParameterEventFilter;
        "ScopeParameterAsOneOf(uint16,address,bytes4,uint256,uint8,bytes[],uint256)"(role?: null, targetAddress?: null, functionSig?: null, index?: null, paramType?: null, compValues?: null, resultingScopeConfig?: null): ScopeParameterAsOneOfEventFilter;
        ScopeParameterAsOneOf(role?: null, targetAddress?: null, functionSig?: null, index?: null, paramType?: null, compValues?: null, resultingScopeConfig?: null): ScopeParameterAsOneOfEventFilter;
        "ScopeRevokeFunction(uint16,address,bytes4,uint256)"(role?: null, targetAddress?: null, selector?: null, resultingScopeConfig?: null): ScopeRevokeFunctionEventFilter;
        ScopeRevokeFunction(role?: null, targetAddress?: null, selector?: null, resultingScopeConfig?: null): ScopeRevokeFunctionEventFilter;
        "ScopeTarget(uint16,address)"(role?: null, targetAddress?: null): ScopeTargetEventFilter;
        ScopeTarget(role?: null, targetAddress?: null): ScopeTargetEventFilter;
        "UnscopeParameter(uint16,address,bytes4,uint256,uint256)"(role?: null, targetAddress?: null, functionSig?: null, index?: null, resultingScopeConfig?: null): UnscopeParameterEventFilter;
        UnscopeParameter(role?: null, targetAddress?: null, functionSig?: null, index?: null, resultingScopeConfig?: null): UnscopeParameterEventFilter;
    };
    estimateGas: {
        keyForCompValues(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        keyForFunctions(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        keyForCompValues(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyForFunctions(targetAddress: PromiseOrValue<string>, functionSig: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
