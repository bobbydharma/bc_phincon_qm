interface CarModel {
  brand: string;
  model: string;
  year: number;
}

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getModel(): CarModel {
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

function hitung(a: number, b: number, callback: (result: number) => void ) {
  let result = a + b;
  callback(result);
}

hitung(12, 12, (result) => {
  console.log(result);
});

setInterval((): void => {
    let date = new Date();
    console.log(date.getHours());
}, 1000);
