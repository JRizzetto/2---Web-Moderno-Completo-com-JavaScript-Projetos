function testeNumeros(num1, num2){
    return `${num1 === num2 || num1 > num2}`
}
console.log(testeNumeros(0, 0))
console.log(testeNumeros(0, "0"))
console.log(testeNumeros(5, 1))
console.log(testeNumeros(1, 5))
