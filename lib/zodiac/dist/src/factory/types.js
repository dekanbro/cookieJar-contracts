"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnownContracts = void 0;
var KnownContracts;
(function (KnownContracts) {
    KnownContracts["META_GUARD"] = "metaGuard";
    KnownContracts["OPTIMISTIC_GOVERNOR"] = "optimisticGovernor";
    KnownContracts["TELLOR"] = "tellor";
    KnownContracts["REALITY_ETH"] = "realityETH";
    KnownContracts["REALITY_ERC20"] = "realityERC20";
    KnownContracts["BRIDGE"] = "bridge";
    KnownContracts["DELAY"] = "delay";
    KnownContracts["EXIT_ERC20"] = "exit";
    KnownContracts["EXIT_ERC721"] = "exitERC721";
    KnownContracts["CIRCULATING_SUPPLY_ERC20"] = "circulatingSupplyERC20";
    KnownContracts["CIRCULATING_SUPPLY_ERC721"] = "circulatingSupplyERC721";
    KnownContracts["SCOPE_GUARD"] = "scopeGuard";
    KnownContracts["FACTORY"] = "factory";
    KnownContracts["ROLES"] = "roles";
    KnownContracts["OZ_GOVERNOR"] = "ozGovernor";
    KnownContracts["ERC20_VOTES"] = "erc20Votes";
    KnownContracts["ERC721_VOTES"] = "erc721Votes";
    KnownContracts["MULTISEND_ENCODER"] = "multisendEncoder";
    KnownContracts["PERMISSIONS"] = "permissions";
    KnownContracts["CONNEXT"] = "connext";
})(KnownContracts = exports.KnownContracts || (exports.KnownContracts = {}));
// type META_GUARD_VERSION = "v1.0.0";
// type OPTIMISTIC_GOVERNOR_VERSION = "v1.0.0";
// type TELLOR_VERSION = "v2.0.0";
// type REALITY_ETH_VERSION = "v1.0.0";
// type BRIDGE_VERSION = "v1.0.0";
// type DELAY_VERSION = "v1.0.0";
// type FACTORY_VERSION = "v1.0.0";
// type SCOPE_GUARD_VERSION = "v1.0.0";
// type EXIT_ERC20_VERSION = "v1.0.0" | "v1.1.0";
// type EXIT_ERC721_VERSION = "v1.1.0";
// type CIRCULATING_SUPPLY_ERC20_VERSION = "v1.0.0" | "v1.1.0";
// type CIRCULATING_SUPPLY_ERC721_VERSION = "v1.1.0";
// type ROLES_MOD_VERSION = "v1.0.0";
// type ContractMasterCopies<V extends string> = Record<V, string>;
// export interface ContractAddresses {
//   metaGuard: ContractMasterCopies<META_GUARD_VERSION>;
//   optimisticGovernor: ContractMasterCopies<OPTIMISTIC_GOVERNOR_VERSION>;
//   tellor: ContractMasterCopies<TELLOR_VERSION>;
//   realityETH: ContractMasterCopies<REALITY_ETH_VERSION>;
//   realityERC20: ContractMasterCopies<REALITY_ETH_VERSION>;
//   bridge: ContractMasterCopies<BRIDGE_VERSION>;
//   delay: ContractMasterCopies<DELAY_VERSION>;
//   factory: ContractMasterCopies<FACTORY_VERSION>;
//   scopeGuard: ContractMasterCopies<SCOPE_GUARD_VERSION>;
//   exit: ContractMasterCopies<EXIT_ERC20_VERSION>;
//   exitERC721: ContractMasterCopies<EXIT_ERC721_VERSION>;
//   circulatingSupplyERC20: ContractMasterCopies<CIRCULATING_SUPPLY_ERC20_VERSION>;
//   circulatingSupplyERC721: ContractMasterCopies<CIRCULATING_SUPPLY_ERC721_VERSION>;
//   roles: ContractMasterCopies<ROLES_MOD_VERSION>;
// }