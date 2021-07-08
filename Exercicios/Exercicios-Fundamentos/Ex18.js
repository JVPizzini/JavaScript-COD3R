function totalPrice(itens){
  
  var total = 0
    
  for(let item of itens){
     total += item.price
  }
  
  return total
}

console.log(totalPrice([ 
                          {nome:"teste", price: 10}
                         ,{nome:"teste", price: 20}
                         ,{nome:"teste", price: 30}
                         ,{nome:"teste", price: 40}
                       ]))