function entre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = -1

do {
    opcao = entre(-1, 10)
    console.log(`blablalba ${opcao}.`)
} while (opcao != -1)

console.log('Flw vlw')