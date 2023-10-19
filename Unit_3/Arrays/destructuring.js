/* 
    - Syntax is on the left side of assignment operator
    - Great for pulling info out of an array and assigning data to it's own variable.
*/

let fullName = [`Jane`, `Doe`];

const fName = fullName[0];
const lName = fullName[1];

const [firstName, lastName] = fullName;
//console.log(firstName, lastName);

// console.log(`Hello Mrs. ${lastName}`);


// ! Spread
/*
    - denoted by three consecutive periods: ...
    - pulls out all elements of an array and gives them to you as standalone list of elements

    * Concept of the spread operator - NOT syntax 

    const fullName = [`Rocket`, `Raccoon`];

    ...fullName // `Rocket`, `Raccoon`

    const elements = ...fullName;
*/

const copiedFullName = [...fullName];
// const copiedFullName = [fullName];
// console.log(copiedFullName);

fullName.push(`Mrs.`);
console.log(fullName, copiedFullName);

// console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

// ! Rest
const fullName2 = [`Jane`, `Doe`, `Mrs.`, {month:3, date:22, year:1973}];

const [fName, lName, ,,, ...otherInfo] = fullName2;
console.log(fName);
console.log(lName);
console.log(otherInfo);