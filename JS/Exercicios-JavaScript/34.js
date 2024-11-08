/* 

Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

*/

function duasStrings(string1, string2){
    
    let varResult = "";

    let value1 = string1.toLowerCase();
    let value2 = string2.toLowerCase();
    
    for(let i = 0; i < value1.length; i++)
        if(value1[i] == value2[i]){
            varResult += value1[i]
        }

        return `O resultado é: ${varResult == value1 || varResult == value2}`

        
}

console.log(duasStrings("abcd", "dcba"))




