
//problem 1____

function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";

      console.log(letVariable);
      console.log(constVariable);
    }
    console.log(varVariable);
   
  }
  
  scopeTest();


// Problem 2....

function greet(name,greeting="hello") {
    console.log(`${greeting}, ${name}!`);
}
greet('alice');
greet("Bob", "Good morning")

// Problem 3....
    let sum=0;
    function sumfunc(...args){
        
        for (let i = 0; i < args.length; i++)
        {
            sum += args[i];
        }

        return sum;
    }
    console.log(sumfunc(1, 2, 3));
    console.log(sumfunc(10, 20, 30, 40));

// Problem 4....

function mergeArrays(...args){
    return args.concat();
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

console.log(mergeArrays(...array1, ...array2, ...array3));

// Problem 5....

const parson={
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, i am ${this.name} and I'm ${this.age} years old.`);
    }
}
parson.greet();

// Problem 6....

const fruits = ["apple", "banana", "cherry"];
    for (i of fruits){
      console.log(i);
    }

// Problem 7....
const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old`;
console.log(message); 

// Problem 8....
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (i of students){
    console.log(i.name , i.grade);
  }

// Problem 9....
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

//   for (i in nestedArrays){
//     // console.log(nestedArrays[i])  
//     for (j in nestedArrays[i]){
//     //    console.log( nestedArrays[i][j] )
//        sumarray += nestedArrays[i][j];
//     }
//   }
let sumarray = 0;
for (let i of nestedArrays){
    for (let j of i) {
        sumarray += j;
    }
    // console.log(...i);
}
console.log(sumarray);


// Problem 10....
const a = 5;
const b = 10;

const result = `The sum of 5 and 10 is ${a+b}`;
console.log(result); 
