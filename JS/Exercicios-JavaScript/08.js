/* 

Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. 

Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”
Escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

*/

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 2"
 
function avaliaPontuacoes (stringPontuacoes) {
    const pontuacao = stringPontuacoes.split(", ").map(Number)

    let piorJogo = 1
    let menorPontuacao = pontuacao[0]
    let recorde = pontuacao[0]
    let quebraRecord = 0


    for(let i = 1; i < pontuacao.length; i++){
        if(pontuacao[i] < menorPontuacao){
            menorPontuacao = pontuacao[i]
            piorJogo = 1 + i
            }else if(pontuacao[i] > recorde){
                recorde = pontuacao[i]
                quebraRecord++
                
            }
        }

        return [piorJogo, quebraRecord]
    }

    
console.log(avaliaPontuacoes(stringPontuacoes))




