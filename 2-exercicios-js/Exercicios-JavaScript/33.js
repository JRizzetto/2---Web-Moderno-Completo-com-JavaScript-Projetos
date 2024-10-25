/* 

Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.

Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. 

Todos os elementos do vetor resultado deverão aparecer no console.

*/

const vetorInteiro = [12, 15, 22, 33]
const vetorString = ["Jefferson", "Suelen", "Janaina", "Amalia"]
const vetorDouble = [4.5, 13.8, 20.2, 25.5]

const vetorConcat = vetorInteiro.concat(vetorDouble, vetorString);

console.log(vetorConcat)