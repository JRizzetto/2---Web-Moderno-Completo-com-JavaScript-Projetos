/* 

O cardápio de uma lanchonete é o seguinte:

Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. 
Considere que a cada execução somente será calculado um item. 
Use o comando switch. 
Crie um caso default para produto não existente.

*/

function produtos(codigo, quantidade){

    let preco = 0
    let produto

    switch(codigo){
        case 100:
            preco = 3
            produto = "Cachorro quente"
            console.log(`${produto}: R$ ${(quantidade * preco).toFixed(2)}`)
            break

        case 200:
            preco = 4
            produto = "Hambúrguer Simples"
            console.log(`${produto}: R$ ${(quantidade * preco).toFixed(2)}`)
            break

        case 300:
            preco = 5.5
            produto = "Cheeseburguer"
            console.log(`${produto}: R$ ${(quantidade * preco).toFixed(2)}`)
            break

        case 400:
            preco = 7.5
            produto = "Bauru"
            console.log(`${produto}: R$ ${(quantidade * preco).toFixed(2)}`)
            break

        case 500:
            preco = 3.5
            produto = "Refrigerante"
            console.log(`${produto}: R$ ${(quantidade * preco).toFixed(2)}`)
            break

        case 600:
            preco = 2.8
            produto = "Suco"
            console.log(`${produto}: R$ ${(quantidade * preco).toFixed(2)}`)
            break

        default:
            console.log("Esse produto não existe")
        
    }
}

produtos(100, 2)
produtos(200, 2)
produtos(300, 2)
produtos(400, 2)
produtos(500, 2)
produtos(600, 2)
produtos(700, 2)