function salario(qtdHr,valorHr){
    return `Salário desse é de => R$${(qtdHr * valorHr).toFixed(2)}`
}

console.log(salario(20,20))