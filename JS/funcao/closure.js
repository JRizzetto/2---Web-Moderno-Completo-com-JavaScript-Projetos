// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e maniputar variáveis externas à função

// Contexto léxico em ação!
const x = "Glogal"

function fora(){
    const x = 'Local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())