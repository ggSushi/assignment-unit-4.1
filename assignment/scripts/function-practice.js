console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return `Hello World!`;
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return and personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

let firstName = 'Glonel';
let lastName = 'Dimapilis';
let fullName = `${firstName} ${lastName}`;

function helloName( name ) {
  name = fullName;
  return name;
}
// Remember to call the function to test
console.log('Hello,', helloName());

//! noteGlonel - testing my understanding of the code
let poppins = 'supercalifrigilisticexpialidocious'
function spoonfulOfSugar(mary) {
  mary = poppins;
  console.log(`I'm`,poppins);
  return mary;
}
spoonfulOfSugar(); 
//The above line (25) should just display the log, not the return

console.log(`I feel ${spoonfulOfSugar()}`);
// The above line (28) should display the log within the function 
// AND return the value of mary within the string.
 
//? Chris's revision for passing an argument
/*
function getQuoteFor(person) {
  let quote = '';
  if (person === 'mary') {
    quote = 'supercali...';
  } else {
    quote = 'No quote found for that name';
  }
  return quote;
}

console.log(`I feel ${getQuoteFor('mary')}`);
*/

//? From my understanding, a function can run many/any lines
//? of code, but the return is only displayed when the function is
//? referred as a variable. It won't actually display or show the
//? return when it is simply recalled.
//! end of noteGlonel

// 3. Function to add two numbers together & return the result
let thirdNumber = 2; // for question 4
let secondNumber = 10;
let result = 0;
function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;
  result = firstNumber + secondNumber;
  return result;
}
console.log(`The result is:`, addNumbers(6));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber ) {
  result = firstNumber * secondNumber * thirdNumber;
  return result;
}
console.log(`The multiplied result is:`, multiplyThree(5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
console.log(`Am I a positive number?`, isPositive(5));
console.log(`Am I a positive number?`, isPositive(0));
// Write a separate console.log statement for each outcome

// console.log( 'isPositive - should say true', isPositive(3) );
// console.log( 'isPositive - should say false', isPositive(0) );
// console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'I am most honored to be a positive number', isPositive(3) );
console.log( `I'm not techinically negative...`, isPositive(0) );
console.log( 'Hi. I am a -3.', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
function getLast( array ) {
  
  if (array.length > 0) {
    let lastItem = array[array.length - 1];
    return lastItem;
  } else {
    return;
  }
}
console.log(`Here's the last item of the array:`, getLast(array)); // d20
//* testing if it will show undefined below
array = [];
console.log(`Here's the last item of the array:`, getLast(array)); // undefined


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

//! NOTES: Thanks, Marc!
//! in a function, the VERY FIRST RETURN IT FINDS will complete the function, ending it there. In this loop,
//! it was ending early because I previously had it like this:
/**
 * function find( value, array ){
  for (let item of array) {
    if (value == item) {
      return true;
    } else {
      return false;
    }
  } 
}
 */
//! This wasn't letting it run the loop for anything further than the first value.
//! Marc had me move the return false outside of the loop, which fixed the issue.

//* re-adding values into array for this question.
array = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
function find( value, array ){
  for (let item of array) {
    if (value == item) {
      return true;
    } 
  } 
  return false;
}
console.log('This is the find', find('d30', array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!