const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice +1}) ${nome}`)
    console.log(array)
})

console.log('--------------------------')

aprovados.forEach(nome => console.log(nome))

console.log('--------------------------')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

console.log('--------------------------')

aprovados.forEach(function(nome, indice, array){
    console.log(array)
})