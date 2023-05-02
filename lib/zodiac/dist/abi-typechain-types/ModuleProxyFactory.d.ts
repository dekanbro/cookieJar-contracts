import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ModuleProxyFactoryInterface extends utils.Interface {
    functions: {
        "deployModule(address,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deployModule"): FunctionFragment;
    encodeFunctionData(functionFragment: "deployModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "deployModule", data: BytesLike): Result;
    events: {
        "ModuleProxyCreation(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ModuleProxyCreation"): EventFragment;
}
export interface ModuleProxyCreationEventObject {
    proxy: string;
    masterCopy: string;
}
export type ModuleProxyCreationEvent = TypedEvent<[
    string,
    string
], ModuleProxyCreationEventObject>;
export type ModuleProxyCreationEventFilter = TypedEventFilter<ModuleProxyCreationEvent>;
export interface ModuleProxyFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ModuleProxyFactoryInterface;
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
        deployModule(masterCopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    deployModule(masterCopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deployModule(masterCopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ModuleProxyCreation(address,address)"(proxy?: PromiseOrValue<string> | null, masterCopy?: PromiseOrValue<string> | null): ModuleProxyCreationEventFilter;
        ModuleProxyCreation(proxy?: PromiseOrValue<string> | null, masterCopy?: PromiseOrValue<string> | null): ModuleProxyCreationEventFilter;
    };
    estimateGas: {
        deployModule(masterCopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deployModule(masterCopy: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
