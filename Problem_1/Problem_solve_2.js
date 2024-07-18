// Problem 1.....

const parson ={
    name:"farhan",
    age:"20",
}
const{name,age}=parson
console.log(name);
console.log(age);

// Problem 2.....

// module.js/file
const temp1 = "This is some dummy text1";
const temp2 = "This is some dummy text2";
export { temp1, temp2 };
// index.js
import { temp1, temp2 } from './module.js';
console.log(temp1, temp2);

// Problem 3.....

class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    getArea(){
        return this.length * this.width;
    }
}

const rectangle= new Rectangle(5,10);

console.log(rectangle.getArea());

// Problem 4.....

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set setfullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person.fullName); 
  
  person.setfullName = 'farhan amir';
  console.log(person.fullName); 


// Problem 5.....

const circle = class {
    constructor(radius){
        this.radius=radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

const circleInstance= new circle(5);

console.log(circleInstance.getArea());

// Problem 6.....

let prop='c';

let obj ={
    a:1,
    b:2,
    [prop]:3,
    
}
console.log(obj);

// Problem 7.....

class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
       console.log('Hello cow');
    }
}
class Dog extends Animal{
    makeSound(){
       console.log('Woof woof');
    }
}
const anim = new Dog()
anim.makeSound()

// Problem 9.....

class Math {
    static square(number) {
      return number ** 2;
    }
  }
  
  console.log(Math.square(4)); 

  // Problem 10.....

const mySymbol = Symbol('mySymbol');
const myObject = {
  [mySymbol]: 'Hello, Symbol!'
};

console.log(myObject[mySymbol]); 

