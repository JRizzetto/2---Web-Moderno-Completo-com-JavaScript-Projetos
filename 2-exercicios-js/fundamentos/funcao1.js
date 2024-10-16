function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3);
imprimirSoma(2, b=null);
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma();


// Função com retorno

function soma (a, b=0){
    return a + b;
}

console.log(soma(10, 12));
console.log(soma(10));