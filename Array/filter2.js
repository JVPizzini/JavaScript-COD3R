Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'notebook', preco: 2499, fragil: false},
    {nome: 'ipad', preco: 4499, fragil: true},
    {nome: 'copo de vidro', preco: 1002.4 , fragil: true},
    {nome: 'copo de plastico', preco: 0.49, fragil: false}
       
]
 
console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter(fragil))