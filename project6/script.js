const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr3 = [arr1, arr2];
// console.log(arr3);
// this is called es6 destructuring
const arr4 = [...arr1, ...arr2];
// console.log(arr4);

const obj1 = {
  name: "Nishchay",
};
const obj2 = {
  age: 23,
};
const obj3 = {
  ...obj1,
  ...obj2,
};
//we can have variables as key and value pair with just the var name

// console.log(obj3);

// arrow functions :
// we cannot access the function before declaration
// by default takes all the function and hoists them at teh top
// thats why we can access the normal function before declaration

const myarrowfunction1 = () => {
  return 200;
};
const myarrowfunction2 = () => 200;
// console.log(myarrowfunction1());
// console.log(myarrowfunction2());
// both of the above functions returns the same output
// thats lexical scope
// we can also omit the bracket if and only if we have one argument


const btn1 = document.querySelector('#increment');
btn1.addEventListener('click',()=>{
    console.log('Increment Clicked ')
})

const btn2 = document.querySelector('#decrement');
btn2.addEventListener('click',()=>{
    console.log('Decrement Clicked ')
})

// array functions 
// 1. forEach
// 2. arrayname.map(function(element){
//    do whatever you want
//    })

// example for map array
let counter = 0; 
const mymappedarray = arr4.map(function(element){
    
    return element ** 2;
})
// console.log(arr3,mymappedarray);

// filtered array



const friends =[
  {
    name:"Nishchay",
    age:22,
  },
  {
    name:"Javed",
    age:18,
  },
  {
    name:"Vinod",
    age:24,
  },
  {
    name:"Shri",
    age:12,
  },
]

const filteredarray = friends.filter(element =>{
  if(element.age == 18){
    return element;
  }
})

console.log(filteredarray);
// the original array is not mutated 
// .find just finds the element 
// .forEach
// these are array methods 

