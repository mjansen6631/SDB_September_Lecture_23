// ! Iteration Methods
/* 
    - Do not destroy the original array
    - takes in a callback function
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

// * arrow function w/ block body
const filteredFruit = fruits.filter(fruit =>{
    // console.log(`Parameter:` ,fruit)
    let result = fruit !== `mango`;
    // console.log(`Inside Filter:`, result);
    return result;
});

// console.log(filteredFruit);

let fruit1 = `pineapple`;
// console.log(fruit1.includes(`apple`));

// * arrow function w/ concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes(`apple`));
console.log(filteredFruit2);

// Function Example
function removeMango(fruit) {
    return fruit !==`mango`
}
const filterFruit3 = fruits.filter(removeMango);
console.log(filterFruit3);  

/* 
! Challenge
    How do you remove the 5s from the array?
    Store it in a new variable and console.log that variable
*/

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

function removeFive(num) {
    return num !==5;
}

const noFives = myNumberArray.filter(removeFive)
console.log(noFives);