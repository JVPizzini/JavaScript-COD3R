function real(partes, ...valores){

    console.log(partes)
    console.log(valores)
    
    const resultado = []
    valores.forEach((valor,indice) =>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    }) 
    return resultado.join('')
}

const preco = 29.90
const preco2 = 10

console.log(real `á vista é ${preco} e a prazo é ${preco2}`)