

function search(word,array){

    let achou = []

   for(let i of array){
       if(i.includes(word)){
           achou.push(i)
       }
   }

   return achou
}

function search2(a,array){
    return array.filter(words => words.includes(a))
}

console.log(search("a",["ovo","peito","maça","Laranja"]))
console.log(search2("a",["ovo","peito","maça","Laranja"]))
