/* 
    Ternary Conditional Statement
    - Super cool syntax
    - A shortcut for writing an if, if/else, or else/if statement.
    - (condition) ?  true result : false result;
    - Ternaries REQUIRE the default/else catch all, has to have both true and false results for condition
*/

//let num = 6; Yes!
let num = -1; // Nope! Nadda!
// Ternary: 

(num > 0) ? console.log('Yes!') : console.log('Nope.');

// Instead of:
if(num > 0){
    console.log('Yes!')
} else {
    console.log('Nadda!')
}

// Ternary with two conditions vs. Else If statement

// let x = 1; // results all in goodbyes console logs
// let x = -5 // results all in hi console logs
let x =0 // results all in hello console logs

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary
(x == 0) ? console.log("Hello!") : (x < 0) ? console.log("Hi") : console.log("Goodbye");

// Other way to write ternary
(x == 0) ? console.log("Hello! V2") 
    : (x < 0) ? console.log("hi V2") 
    : console.log("goodbye V2");