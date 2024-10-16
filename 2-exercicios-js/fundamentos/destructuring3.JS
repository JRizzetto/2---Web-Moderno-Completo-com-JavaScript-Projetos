function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 40, min: 50}
console.log(rand(obj))

console.log(rand({ min: 955 }))
console.log(rand({}))


let random;

do {
    random = Math.random(); // Gera um número aleatório entre 0 e 1
    if (random > 0.009) {
        console.log(random);
    }
} while (random > 0.009); // Continua enquanto random for maior que 0.009

console.log('Número menor que 0.009 encontrado:', random);


