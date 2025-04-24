"use strict";
// const myPromise = new Promise((resolve, reject) => {
//     // let success = true;
//     // if (success) {
//     //     resolve("Success");
//     // } else {
//     //     reject("Failed");
//     // }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
// });
// myPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// });
function ngambil() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
            method: "GET",
        });
        const data = yield response.json();
        console.log(data);
    });
}
ngambil();
