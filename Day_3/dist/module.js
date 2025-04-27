"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringModule = exports.name = void 0;
exports.default = stringModule;
exports.name = "John";
function stringModule() {
    return {
        generateRandomCharacter: (length) => {
            return Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("");
        },
    };
}
class StringModule {
    static getInstance() {
        if (!StringModule.instance) {
            StringModule.instance = new StringModule();
        }
        return StringModule.instance;
    }
    generateRandomCharacter(length) {
        return Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("");
    }
}
exports.StringModule = StringModule;
