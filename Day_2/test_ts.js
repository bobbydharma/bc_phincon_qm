var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getModel = function () {
        return {
            brand: this.brand,
            model: this.model,
            year: this.year,
        };
    };
    return Car;
}());
var car = new Car("Toyota", "Camry", 2022);
var test = car.getModel();
console.log(test);
// Callback
// type Callback = (result: number) => void;
function hitung(a, b, callback) {
    var result = a + b;
    callback(result);
}
hitung(12, 12, function (result) {
    console.log(result);
});
setInterval(function () {
    var date = new Date();
    console.log(date.getHours);
}, 1000);
