function minValue(array){

    let minValue = array[0]

    for(let i = 0; i < array.length;i++){

        if (array[i] < minValue){
            minValue = array[i]
        }
    }

    return minValue
}


function minValue2(array){
    
    let minValue = array[0]

    for(let i in array){
        if (array[i] < minValue){
            minValue = array[i]
        }
    }
    return minValue
}

function minValue3(array){

    return array.reduce((anterior,atual ) => anterior < atual ? anterior : atual)

}

function minValue4(array){
    return Math.min(...array)
}

console.log(minValue ([3,5,9,7,0.4,21,3,5,8,1,52]))
console.log(minValue2([3,5,9,7,0.4,21,3,5,8,1,52]))
console.log(minValue3([3,5,9,7,0.4,21,3,5,8,1,52]))
console.log(minValue4([3,5,9,7,0.4,21,3,5,8,1,52]))
