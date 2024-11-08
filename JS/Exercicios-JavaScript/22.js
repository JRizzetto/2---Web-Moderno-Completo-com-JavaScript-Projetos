/* 

Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 

A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. 
Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
O retorno deve ser o valor a ser pago para o respectivo mês escolhido.


*/

function clubeSocio(mes, anuidade){

    if(mes > 0 && mes <= 12){
        let valorPagar = anuidade * (1 + 0.05)**(mes-1)
        
        return `O valor a ser pago é: R$ ${valorPagar.toFixed(2)}`
    }else{
        return `Digite um mês válido dentro do intervalo de Janeiro a Dezembro`

    }

}

console.log(clubeSocio(13, 1000))