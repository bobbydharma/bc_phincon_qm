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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importStar(require("./module"));
// Default import and named import
console.log(module_1.name);
console.log((0, module_1.default)().generateRandomCharacter(20));
console.log(module_1.StringModule.getInstance().generateRandomCharacter(20));
// Destructuring can be used on objects and arrays
let office = {
    name: "Phincon",
    location: "Jakarta",
    employees: 100,
    detailOffice: {
        facility: "Meeting Room",
        capacity: 20,
    },
};
const { name: officeName, location: locationOffice, employees, detailOffice: { facility: fasilitas, capacity: kapasitas }, } = office;
console.log(officeName);
console.log(locationOffice);
console.log(employees);
console.log(fasilitas);
console.log(kapasitas);
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
// javascript class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
