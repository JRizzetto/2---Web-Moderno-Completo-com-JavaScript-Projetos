function nomeDoMes(mes){
    switch(mes){
        case 1: 
            console.log('O mês é Janeiro')
             break
        case 2:
            console.log('O mês é Fevereiro')
            break
        case 3:
            console.log('O mês é Março')
            break
        case 4:
            console.log('O mês é Abril')
            break
        case 5:
            console.log('O mês é Maio')
            break
        case 6:
            console.log('O mês é Junho')
            break
        case 7:
            console.log('O mês é Julho')
            break
        case 8:
            console.log('O mês é Agosto')
            break
        case 9:
            console.log('O mês é Setembro')
            break
        case 10:
            console.log('O mês é Outubro')
            break
        case 11:
            console.log('O mês é Novembro')
            break
        case 12:
            console.log('O mês é Dezembro')
            break
    }
}

nomeDoMes(1)
nomeDoMes(2)
nomeDoMes(3)
nomeDoMes(4)
nomeDoMes(5)
nomeDoMes(6)
nomeDoMes(7)
nomeDoMes(8)
nomeDoMes(9)
nomeDoMes(10)
nomeDoMes(11)
nomeDoMes(12)

console.log('--------------------------')


const arrayMeses =['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function funcaoMeses(mes){
    let resultFInal
    for(let i = 0; i < arrayMeses.length; i++)
        if(mes == (i +1)){
            console.log(`O mês é ${arrayMeses[i]}`)
        }
    return
}

funcaoMeses(5)

console.log('--------------------------')

const arrayMeses2 =['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function funcaoMeses1(mes){
    const nomMes = arrayMeses2[mes - 1]
    console.log(nomMes)
}

funcaoMeses(5)