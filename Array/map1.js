const numeros = [1,2,3,4,5]

// Map = For com propósito

let resultado = numeros.map(function(e)
{
    return e * 20
})

console.log(resultado)

const somar10 = e => e + 10
const mult = e => e * 10
const teste = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = numeros.map(somar10).map(mult).map(teste)
console.log(resultado)