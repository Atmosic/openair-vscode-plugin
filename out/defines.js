"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ncsVersions = exports.zephyrVersions = exports.zephyrHals = exports.toolchainTargets = void 0;
const vscode = __importStar(require("vscode"));
exports.toolchainTargets = [
    { picked: true, label: "arm" },
];
exports.zephyrHals = [
    { label: "Altera", description: "hal_altera" },
    { label: "Ambiq", description: "hal_ambiq" },
    { label: "Atmel", description: "hal_atmel" },
    { label: "Espressif", description: "hal_espressif" },
    { label: "Ethos-U", description: "hal_ethos_u" },
    { label: "GigaDevice", description: "hal_gigadevice" },
    { label: "Infineon", description: "hal_infineon" },
    { label: "Intel", description: "hal_intel" },
    { label: "Microchip", description: "hal_microchip" },
    { label: "Nordic", description: "hal_nordic" },
    { label: "Nuvoton", description: "hal_nuvoton" },
    { label: "NXP", description: "hal_nxp" },
    { label: "OpenISA", description: "hal_openisa" },
    { label: "QuickLogic", description: "hal_quicklogic" },
    { label: "Renesas", description: "hal_renesas" },
    { label: "Raspberry Pi Pico", description: "hal_rpi_pico" },
    { label: "Silicon Labs", description: "hal_silabs" },
    { label: "STM32", description: "hal_stm32" },
    { label: "Telink", description: "hal_telink" },
    { label: "Ti", description: "hal_ti" },
    { label: "Würth Elektronik", description: "hal_wurthelektronik" },
    { label: "xtensa", description: "hal_xtensa" }
];
exports.zephyrVersions = ["v4.0.0", "v3.7.0", "main", "Other Version"];
exports.ncsVersions = ["v2.8.0", "v2.7.0", "v2.6.2", "main", "Other Version"];
//# sourceMappingURL=defines.js.map
