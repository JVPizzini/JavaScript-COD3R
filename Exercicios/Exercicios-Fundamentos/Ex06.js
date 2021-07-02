function  boolOrNum(a){

    if (typeof a == "boolean")
    {
        return !a
    }else if (typeof a == "number"){
        return -a
    }
    
}

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }

console.log(boolOrNum(10))
console.log(inverso(-10))
