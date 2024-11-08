/* 
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

- Equilátero: Os três lados são iguais
- Isósceles: Dois lados iguais
- Escaleno: Todos os lados são diferentes
*/

function tipoTriangulo(a, b, c){
    if(a === b && b === c){
        return 'Equilátero'
    }else if(a === b || b === c || a === c){
        return 'Isósceles'
    }else{
        return 'Escaleno'
    }
}

console.log("Tipo do triângulo: " + tipoTriangulo(10, 10, 10))
console.log("Tipo do triângulo: " + tipoTriangulo(10, 5, 10))
console.log("Tipo do triângulo: " + tipoTriangulo(12, 5, 10))

console.log('---------------------------------')

// Usando um objeto para armazenar os tipos de triângulos e retornar a classificação
function tipoTriangulo1 (a, b, c){
    const tipos = {
        equilatero: 'Equilátero',
        isosceles: 'Isósceles',
        escaleno: 'Escaleno'
    };

    if(a === b & b === c){
        console.log("Tipo do triângulo: " + tipos.equilatero)
    } else if(a === b || b === c || a === c){
        console.log("Tipo do triângulo: " + tipos.isosceles)
    } else{
        console.log("Tipo do triângulo: " + tipos.escaleno)
    }
}

tipoTriangulo1(10, 10, 10);
tipoTriangulo1(5, 10, 10)
tipoTriangulo1(5, 10, 20)