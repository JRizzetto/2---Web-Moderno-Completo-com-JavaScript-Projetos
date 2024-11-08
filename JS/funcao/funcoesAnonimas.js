const soma = function (x, y) {
    return x + y
}

const multiplicacao = function (x, y) {
    return x * y
}

const subtracao = function (x, y) {
    return x - y
}

console.log(soma(3,4))
console.log(multiplicacao(3,4))
console.log(subtracao(3,4))

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, multiplicacao);
imprimirResultado(3, 4, subtracao);

const pessoa = {
    falar: function(){
        console.log('Olá Dev')
    }
}

pessoa.falar()