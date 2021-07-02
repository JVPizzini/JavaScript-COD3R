const { toLength } = require("lodash")

function repita(a,b){
    
    lista = []

    for (let i = 0; i < b; ++i){
      lista[i] = a
    }

    return lista
}

function repetir2(a,b){
    
    lista = []

    for (let i = 0; i < b; i++){
      lista.push(a)
    }

    return lista
}

function repetir(item, quantidade) {
  return Array(quantidade).fill(item)
  }

console.log((repita(10,5)))
console.log((repetir2("oi",5)))
console.log(repetir('eae',5))