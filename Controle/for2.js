const notas = [6.7, 6.8, 7.8, 8.9]


for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'joao',
    sobrenome: 'pizzini',
    idade: 29,
    peso: 84
}

for (let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}