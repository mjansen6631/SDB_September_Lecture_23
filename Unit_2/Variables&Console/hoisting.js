/* 
! Hoisting
    - JS reads from top to bottom in two different passes.
        1st pass:
            - Made by the compiler. This is where hoisting is initiated.
            - Compiled for execution. 
        2nd pass:
            - Variables are assigned.
            - Executes at hoisted code.
*/

let names = `Everly`;
console.log(names);

 b(); // - Still able to read because it passes through file twice.

function b(){
    console.log(`I have been hoisted!`);
}

b();

c(); // Cannot access `c` before initialization

let c = () => {
    console.log(`Hoisted?`)
}

c();
