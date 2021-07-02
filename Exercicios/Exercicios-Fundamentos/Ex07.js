function entreMaxMin(n, max, min, inc = false){

    if (inc) return n >= min && n <= max

    return n > min && n < max
}

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }


console.log(entreMaxMin(100,100,5))