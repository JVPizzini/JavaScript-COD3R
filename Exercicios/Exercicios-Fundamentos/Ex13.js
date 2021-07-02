
function soNumeros(array){

    let arrayNovo = []

    // for(let i = 0; i < array.length; i++){
    //     if( typeof array[i].isInteger ){
            
    //         arrayNovclearo(array.length).fill(array[i]) 
    //     }
    // }

    array.forEach(function(itens){
        if (typeof itens ==='number'){
            arrayNovo.push(itens)
        }
    })
        
    return arrayNovo
}

console.log(soNumeros(["teste","oi",1,"oie",10]))
