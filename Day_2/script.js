let a = 10;
let b = a;
b = 20;

console.log(a);

let objA= {value: 10};
let objB = objA;
objB.value = 20;
console.log(objA);


let student = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 90},
    {name: "Charlie", score: 75}
]

let studentCopy = student.slice()
let studentDeepCopy = JSON.parse(JSON.stringify(student))

studentCopy[0].score = 100
studentDeepCopy[0].score = 80

console.log(student);
console.log(studentCopy);
console.log(studentDeepCopy);