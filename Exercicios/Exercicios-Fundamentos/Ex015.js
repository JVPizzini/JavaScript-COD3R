function retornaPar(array){

    let pares = []

    for(let i = 0; i < array.length;i++){
       
        if ((i % 2) === 0 )
        if ((array[i] % 2) === 0){
            pares.push(array[i])
        }
    }

    return pares 
    
}

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares(([1,2,4,1,4,1,6])))
console.log(retornaPar([1,2,4,1,4,1,6]))

