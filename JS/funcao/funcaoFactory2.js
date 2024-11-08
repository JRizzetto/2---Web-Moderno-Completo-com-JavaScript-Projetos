function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

const produto1 = criarProduto("Caneca", 50)
console.log(produto1)

const produto2 = criarProduto("Mesa", 100)
console.log(produto2)