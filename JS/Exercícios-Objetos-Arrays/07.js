function estaEntre(numero, minimo, maximo, inclusivo = false){
       
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }

    return numero > minimo && numero < maximo
}

console.log(estaEntre(100, 10, 500))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))