import stringModule, { name, StringModule } from "./module";

// Default import and named import
console.log(name);
console.log(stringModule().generateRandomCharacter(20));
console.log(StringModule.getInstance().generateRandomCharacter(20));


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

const {
  name: officeName,
  location: locationOffice,
  employees,
  detailOffice: { facility: fasilitas, capacity: kapasitas },
} = office;

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
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

