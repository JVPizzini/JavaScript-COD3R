function sumArray(array){

    let result = 0

    array.forEach(function(itens){
       result += itens
    })

    return result
}

function somarNumeros(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual, ) => acumulador + numeroAtual, 0)
    return soma
}

console.log(sumArray([1,2,3,4,5,6,7]))
console.log(somarNumeros([3,2,1]))