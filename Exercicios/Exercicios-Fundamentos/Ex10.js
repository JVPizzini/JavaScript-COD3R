function simbolo(repitir,a){
    
    let simbolo = repitir

    for(let i = 0; i < a; i++ ){
      simbolo += repitir
    }
    return simbolo
}

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
    }

console.log(simboloMais(10))
console.log(simbolo('oi',10))

