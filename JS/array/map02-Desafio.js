const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lápis", "preco": 21.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]
console.log(carrinho)

console.log('-------------------------------')

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultados = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultados)

