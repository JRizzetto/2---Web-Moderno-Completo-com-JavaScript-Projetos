// pessoa -> 123 -> {...}

const pessoa = { nome: 'Joao'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua Joao Antonio Andrade'
console.log(pessoa)