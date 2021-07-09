
function luck(num){

    const min = 1
    const max = 10

    const random = Math.floor(Math.random() * (max - min + 1) + min)

    return (num === random ? `Parabéns o numero sorteado foi ${random}`
                           : `Tente novamente, o numero sorteado foi ${random}`)

}

console.log(luck(5))
