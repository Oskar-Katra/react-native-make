"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackwardCompatibleConfig = (config) => {
    const commands = config.commands;
    return commands.map(command => (Object.assign({}, command, { options: command.options.map(option => (Object.assign({}, option, { name: undefined, command: option.name }))) })));
};
