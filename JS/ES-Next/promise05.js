function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            }else {
                resolve(valor)
            }
        }catch(e) {
            reject(e)
        }

    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro esp.: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .then(() => console.log('Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
