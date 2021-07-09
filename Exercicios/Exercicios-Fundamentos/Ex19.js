function ReturnMedia(array){

    let total = 0
    
    array.forEach(function(item){
        total += item
    })
    total = (total / array.length)
    return total
}

console.log(ReturnMedia([1,2,3,4,5,6]))