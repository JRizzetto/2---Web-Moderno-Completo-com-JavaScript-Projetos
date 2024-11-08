const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Realizar as médias dos alunos 

// Imperativo 
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total12 = alunos.map(getNota).reduce(soma)
console.log(total12 / alunos.length)