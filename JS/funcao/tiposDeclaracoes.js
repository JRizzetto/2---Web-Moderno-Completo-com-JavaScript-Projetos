console.log(soma(3, 4)) // Quando declaramos podemos chamar a função antes, quando declaramos o JS carrega os dados já antes. 


// Function declaration
function soma(x, y){
    return x + y
}

// Function expression 
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4))

// Named function expression
const mult = function mult(x, y){ // Menos convencional
    return x * y
}
console.log(mult(3, 4))