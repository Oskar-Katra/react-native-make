"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const modules_1 = require("./modules");
const path_1 = require("path");
const rn_compatibility_layer_1 = require("./rn-compatibility-layer");
const v2Config = {
    commands: [modules_1.setIconCommand, modules_1.setSplashScreenCommand],
};
const rnCliVersion = require(path_1.resolve('.', 'node_modules/@react-native-community/cli/package.json'));
const isUsingV1 = !!rnCliVersion.version.match(/^[0-1]\./);
exports.rnPluginConfig = isUsingV1 ? rn_compatibility_layer_1.createBackwardCompatibleConfig(v2Config) : v2Config;
