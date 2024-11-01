const pilotos = ['Vettel', 'Alonso', 'Reikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento 
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no inicio do array 
console.log(pilotos)

// splice pode adicionar e remover elementos 

// Adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) 
console.log(pilotos)

// O método slice() retorna um novo array
const algunsPilotos = pilotos.slice(2) // Retorna um array a partir do índice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

