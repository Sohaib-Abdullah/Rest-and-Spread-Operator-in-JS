// function sum(num1, num2){
//     console.log(num1 + num2)
// }

// sum(20, 30);// it is simple funcion now see method overloading

// function sum(){
//     let sum = 0;
//     console.log(arguments)
//     for(let i in arguments){
//         sum += arguments[i];//it is an object that why we use [] to access values
//     }
//     console.log(sum)
// }

// sum(20, 30);
// sum(20, 30, 40)
// sum(20, 30, 40, 50);
//for function overloading in javascript there is an arugments function which takes multiple arguments

//But there is one flaws of the arguments function is that if we have multiple types of arguments it can not
//add those number see program below

// function sum(){
//     let sum = 0;
//     console.log(arguments)
//     for(let i in arguments){
//         sum += arguments[i];
//     }
//     console.log(sum)
//     console.log(typeof sum)
// }

// sum("sohaib", 20, 30);
// in this case the arguments function will be work like string concatenation and this addtion gives string


// To overcome this we use rest operator


// function sum(name, ...args){ //here ...args is rest operator so it take the rest parameters other than string
//     let sum = 0;
//     console.log(...args)
//     for(let i in args){
//         sum += args[i];
//     }
//     console.log(sum)
// }

// sum("sohaib", 10, 20, 30, 40, 50);

// Rest Parameters - The rest parameter allows a 
// function to accept an indefinite number of arguments as an array.

// function collectThings(x, ...y) {
//     console.log(x);
//     console.log(y);
//   }
//   collectThings(1,2,3,4,5,6,7,8,9);
  
  // Rules
  // a) A function definition can only have one rest parameter.
  // b) The rest parameter must be the last parameter.
  

//Spread Operator


// function sum(name, ...args){ 
//     let sum = 0;
//     console.log(...args)
//     for(let i in args){
//         sum += args[i];
//     }
//     console.log(sum)
// }

//   let arr = [10,20,30,40,50]

// sum("sohaib", arr);
//here we pass array but the sum is not perform because args as parameter takes the array and simple treated them
//as number  which is actually done by the spread operator

//so to calculate the sum of the array we have to convert this array to numbers by the spread operator and
//and pass those numbers to the rest operator which will then perform the sum
//see program below

// function sum(name, ...args){ // here ...args will be act as the rest operator
//     let sum = 0;
//     console.log(...args)
//     for(let i in args){
//         sum += args[i];
//     }
//     console.log(sum)
// }

//   let arr = [10,20,30,40,50]
     

// sum("sohaib", ...arr);
// here ...arr is spread operator which convert the array of numbers into simple
//number

//  let arr = [10,20,30,40,50]

//  console.log(...arr)//here array is taken as separte number not one array
//  console.log(arr)//whereas it is an array
//  console.log(typeof arr)//whereas it is an array but it's type is object
// //  console.log(typeof ...arr)it gives error why..?


// let arr1 = [10,20,30]
//  let arr2 = arr1//here it cloning the array and any element will be push to the both array beaxuse they
//  //are pointing to the same array
//  arr1.push(50);

 
//  console.log(arr1)
//  console.log(arr2)
//  console.log(typeof arr1)
//  console.log(typeof arr2)


//  let arr1 = [10,20,30]
//  let arr2 = [...arr1]//here it is not cloning both arrays are different
//  arr1.push(50);

 
//  console.log(arr1)
//  console.log(arr2)
//  console.log(typeof arr1)
//  console.log(typeof arr2)

//  let arr1 = [10,20,30,40]
//  let arr2 = [50,60]

//  let arr3 = arr1.concat(arr2)
//  console.log(arr3)//here we are using the array method to concatenate the two array
 //same thing can be happened with spread operator

//  let arr1 = [10, 20, 30, 40]
//  let arr2 = [50, 60]

//  let arr3 = [...arr1, ...arr2]// here sread operator is combining these two arrays
//  console.log(arr3)

// we can aslo do that

//  let arr1 = [10, 20, 30, 40]
//  let arr2 = [50, 60]

//  let arr3 = [70, ...arr1, ...arr2, 80]

// console.log(arr3)// it is widely used in real world project

//we can also do that with objects also

var obj1 = {name: "sohaib"}

var obj2 = {age:20}

const obj3 = {...obj1, ...obj2, "occupation":"teaching"}

console.log(obj3)
//this spread operator is widely used in real life project 
 




