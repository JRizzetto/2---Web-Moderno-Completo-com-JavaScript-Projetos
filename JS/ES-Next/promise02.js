

// setTimeout(function () {
//     console.log(`Executando calback...`)

//     setTimeout(function () {
//     console.log(`Executando calback...`)
//         setTimeout(function() {
//             console.log(`Executando calback...`)
//         }, 2000)
//     }, 2000)
// }, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise ...')
            resolve('Vishhhhh')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)