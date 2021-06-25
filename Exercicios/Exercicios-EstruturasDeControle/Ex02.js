function triangulo (l1,l2,l3){
    if(l1 === l2 && l2 === l3 && l1 === l3)
    {
        return console.log(`Os valos são 1º - ${l1} 2º - ${l2} 3º - ${l3} esse é um triangulo Equilátero`)
    } 
    else if (l1 === l2 && l1 != l3 && l2 != l3)
    {
        return console.log(`Os valos são 1º - ${l1} 2º - ${l2} 3º - ${l3} esse é um triangulo Isóseles`) 
    }
    else
    return console.log(`Os valos são 1º - ${l1} 2º - ${l2} 3º - ${l3} esse é um triangulo Escaleno`) 
}

triangulo(1,11,2)