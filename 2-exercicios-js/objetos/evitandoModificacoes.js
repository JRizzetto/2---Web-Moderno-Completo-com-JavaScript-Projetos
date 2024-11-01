// Object.precentExtations

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Essa borracha é branca'
delete produto.tag

console.log(produto)
console.log('----------------------------------')

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado ? : ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
console.log('----------------------------------')

// Object.freeze = Selado + valores constantes
const cachorro = {nome: 'Thor', idade: 12}
Object.freeze(cachorro)
console.log('Está congelado? ', Object.isFrozen(cachorro))

cachorro.nome = 'Magrela'
cachorro.idade = 3
delete cachorro.idade
cachorro.raça = 'Vira Lata'
console.log(cachorro)