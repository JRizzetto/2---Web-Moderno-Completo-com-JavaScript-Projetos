// Armazenar uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a+b
}

console.log(soma(3, 6))

// Retorno implícito 
const sobtracao = (a, b) => a - b;
console.log(sobtracao(6, 3))

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!')
