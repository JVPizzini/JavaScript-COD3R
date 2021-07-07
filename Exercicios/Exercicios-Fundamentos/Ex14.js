function objToArray(obj){
    
    const result = []
    for(let chave in obj){
        result.push([chave,obj[chave]])
    }
    return result
}

function objToArray2(obj){

    const keys = Object.keys(obj)
    const result = keys.map(keys => [keys,obj[keys]])
    return result
    
}

function objToArray3(obj){
    return Object.entries(obj)
}

console.log(objToArray({Nome: "joao"}))
console.log(objToArray2({Nome: "joao",sobrenome: "Pizzini"}))
console.log(objToArray3({Nome: "joao",sobrenome: "Pizzini", da:"Silva"}))