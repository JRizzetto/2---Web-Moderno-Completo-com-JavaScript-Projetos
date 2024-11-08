// Operador ... rest(juntar) / spread(espalhar)

// Usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 12348.99}
console.log(funcionarios)
console.log(funcionarios.nome)
console.log(funcionarios.salario)
const clone = { ativo: true, ...funcionarios}
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
console.log(grupoA)
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)