const resultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Deu bom')
            break
        default:
            console.log('Você está sem nota!')
    }
}
resultado(10)
resultado(7)
resultado(2)
resultado(-1)
resultado(11)
resultado()