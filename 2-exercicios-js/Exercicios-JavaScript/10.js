/* 

Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false


*/  

function divideTres(numberInt){
    let result = (numberInt % 3 === 0)
    return result
}

console.log(divideTres(9))