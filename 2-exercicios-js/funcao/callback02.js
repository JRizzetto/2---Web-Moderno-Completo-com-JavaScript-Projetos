const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

console.log('--------------------------------------')

// Com callback
notasBaixas1 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas1)

console.log('--------------------------------------')

const notasMenor7 = nota => nota < 7
const notasBaixas2 = notas.filter(notasMenor7)
console.log(notasBaixas2)