"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getModel() {
        return {
            brand: this.brand,
            model: this.model,
            year: this.year,
        };
    }
}
let car = new Car("Toyota", "Camry", 2022);
let test = car.getModel();
console.log(test);
// Callback
// type Callback = (result: number) => void;
function hitung(a, b, callback) {
    let result = a + b;
    callback(result);
}
hitung(12, 12, (result) => {
    console.log(result);
});
setInterval(() => {
    let date = new Date();
    console.log(date.getHours());
}, 1000);
