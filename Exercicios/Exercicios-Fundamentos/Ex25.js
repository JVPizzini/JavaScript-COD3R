function amountChar(char,phase){

  let amountChar = 0
  
  for(let i = 0; i < phase.length;i++){
      if(phase.charAt(i) === char){
          amountChar++
      }
  }
  return amountChar
}

function amountChar2(char,phase){

    let amountChar = 0

    for (let i in phase){
        if(phase.charAt(i) === char){
            amountChar++
        }
    }
    return amountChar
}

function amountChar3(char,phase){
    return [...phase].filter(search => search === char).length
}
//
console.log(amountChar("a","a maça está na arvore"))
console.log(amountChar2("a","a maça está na arvore"))
console.log(amountChar3("a","a maça está na arvore"))
