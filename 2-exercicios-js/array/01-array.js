console.log(typeof Array, typeof new Array, typeof [], typeof {})

let aprovados = new Array('BIa', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Calos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Calos', 'Ana']
console.log(aprovados)

aprovados.splice(1, 1)
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

aprovados.splice(3, 0, 'Rodrigo', 'João')
console.log(aprovados)