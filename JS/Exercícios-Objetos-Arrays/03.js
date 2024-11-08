function calcularSalario(horasTrabalhada, valorHora) {
    let calculoSalario = horasTrabalhada * valorHora
    return `O seu salário é R$ ${calculoSalario.toFixed(2).replace('.', ',')}`
}

console.log(calcularSalario(160, 50))