"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./math/add");
const minus_1 = require("./math/minus");
const os = __importStar(require("os"));
const path = __importStar(require("path"));
// @ts-ignore
const fuck = __importStar(require("./fuck"));
/**
 * 测试方法
 */
function f() {
    let a = 1;
    let b = 2;
    let result;
    result = add_1.add(a, b);
    result = minus_1.minus(result, b);
    console.log(result);
    console.log(os.arch());
    let pathname = path.join(__dirname, '../a', 'b', 'c');
    console.log(pathname);
    fuck.sayHello();
}
f();
function speak(lang) {
    return `I speak ${lang}`;
}
console.log(speak("english" /* English */));
