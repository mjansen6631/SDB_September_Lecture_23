// let x = 12;

// function scope (){
   // let x = 33;
    //console.log(x);
// }

// scope();
// console.log(x);

y = 12;

function scope2 (){
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

/* 
    Variable Keywords:
        - const: Cannot be reassigned.
        - var: Scoped to nearest function.
        - let: Scoped to the nearest enclosing block.
*/

// *var
let letVariable = 12;

function letTest() {
    let letVariable = 33;

    // console.log(`let - Outside If: ${letVariable}`);
    if (true) {
        let letVariable = 45;
        console.log (`Var - within If: ${letVariable}`);
    }

    console.log(`let - Outside If: ${letVariable}`);
}

letTest();
console.log(`let - Outside Function ${letVariable}`);

// *const
function constTest(){
    const scope = 1

    if(true){
        const scope = 2;
        console.log(scope);
    }

    console.log(scope);
}   

constTest();