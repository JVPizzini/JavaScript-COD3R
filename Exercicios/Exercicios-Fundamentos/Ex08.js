function inteiros(a,b){
    
  let mult = 0

  for(let i = 0; i < b; i++){
      mult += a
  }
  return mult
}

function multiplicadores(a,b){
    
    if(a === 0 || b === 0) return 0
    
    return b === 1 ? a : a + multiplicadores(a,b-1)
}


console.log(multiplicadores(5,5))