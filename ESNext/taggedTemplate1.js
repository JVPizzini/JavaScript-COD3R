// tagged de template - processar o template dentro de uma função

function tag(partes,...valores){
    console.log(partes)
    console.log(valores)

    return 'Outra string'
}

const nome = 'joao'
const sobrenome = 'pizzini'
console.log(tag `ola ${nome} ${sobrenome} td bem?`)
