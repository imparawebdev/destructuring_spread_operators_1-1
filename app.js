/* Destructuring an array or an object means make a smaller one or a variable starting from them*/

// DESTRUCTURING AN ARRAY
const alphabet = ['A', 'B', 'Miao', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

/* a takes the [0], c the [2], rest what's after c */
const [a,, c, ...rest] = alphabet;

console.log(a);
console.log(c);
console.log(rest);

//Create a new array which contains all the elements of boths arrays 
const newArray = [...alphabet, ...numbers];
/*
Potentially, being two arrays, we could also do
const newArray = alphabet.concat(numbers); to get the same result as above
*/
console.log(newArray);

sumAndMultiply = (a, b) => [a+b, a*b];
/*const array = sumAndMultiply(3,3);
console.log(array)*/

// DESTRUCTURING A FUNCTION
const[sum, multiply, division = 'No division'] = sumAndMultiply(3,3);
console.log(sum);
console.log(multiply);
console.log(division); 
/*
It logs 'No division' but if we says that the function returns [a+b, a*b, a/b] then it'll log the result of the division 
*/

