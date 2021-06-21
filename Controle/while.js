function entre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 5

while (opcao != -1) {
    opcao = entre(-1, 10)
    console.log(`numeros random ${opcao}`)
}

console.log('Até aqui')