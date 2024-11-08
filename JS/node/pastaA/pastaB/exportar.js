console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// como exportar algo para fora
this.a = 1 // a foi exportado pra fora como 1
exports.b = 2
module.exports.c = 3

exports = null
exports = console.log(module.exports)

exports = {
    nome: 'Teste'
}

exports = console.log(module.exports)

module.exports = { publico: true }
