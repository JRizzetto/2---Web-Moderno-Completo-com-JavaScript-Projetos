const tecnologias = new Map()
tecnologias.set('react', { framewowrk: false})
tecnologias.set('angular', { framewowrk: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framewowrk)
console.log(tecnologias.get('angular').framewowrk)

console.log('---------------------------------------------')

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(vl, ch)
})

console.log('---------------------------------------------')

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)