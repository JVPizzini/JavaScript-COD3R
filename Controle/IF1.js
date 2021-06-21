function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado ' + nota)

    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('é Verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})