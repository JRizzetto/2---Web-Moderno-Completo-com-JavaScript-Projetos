const notas = [8.22, 8.84, 8.38, 7.83, 9.78, 2.65, 5.88, 2.9, 3.92, 2.35];

for(let nota in notas){
    console.log(`Sua nota é: ${notas[nota]}`)
}

const pessoa = {
    Nome: 'Jefferson',
    Sobrenome: 'Rizzetto',
    Idade: 35,
    Peso: '94kg'
}

for(atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}