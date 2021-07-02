function pri_Ult(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento]
    }

function pri_Ult2(elementos) {
    
    const arrei = [elementos.shift(),elementos.pop()]
    
    //return [elementos[0], elementos[elementos.length - 1]]
    //return elementos.shift()
    return arrei
    }

    console.log(pri_Ult2([11,2,3,4,5,7]))
