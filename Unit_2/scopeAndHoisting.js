let x = 12;

function scope (){
    let x = 33;
    console.log(x);
}

scope();
console.log(x);