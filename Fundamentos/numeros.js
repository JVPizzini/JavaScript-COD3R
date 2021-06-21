    const peso1 = 1.0
        /* Esse numero vai ser reconhecido como interiro pois 1.0 é 1
         * Já se fosse 1.1 esse seria reconhecido como numero flutuante.
         */

    const peso2 = Number('2.1')

    console.log(peso1, peso2)
    console.log(Number.isInteger(peso1))
    console.log(Number.isInteger(peso2))

    const avaliacao1 = 9.55
    const avaliacao2 = 8.22

    const total = avaliacao1 * peso1 + avaliacao2 * peso2
    const media = total / (peso1 + peso2)

    console.log(media.toFixed(3))
    console.log(media.toString()) // Converte para o valor real da média
    console.log(media.toString(2)) // Converte o numero em binário
    console.log(typeof media) // Reconhece a tipagem de 'média'
    console.log(typeof Number) // Diferença do numero com n Maiusculo e Minusculo