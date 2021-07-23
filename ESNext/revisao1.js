// === let  e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a) 
//console.log(b) // Let tem scopo de bloco portanto não pode ser acessada fora

// === template string
const produto = 'ipad'
console.log(`${produto} é caro`)

// === Destructuring
const [l,e,...tras] = 'coder'
console.log(l,e,tras)

const [x,y] = [1,2,3]
console.log(x,y)

const {idade :i, nome} = {nome: 'ana', idade: 9}
console.log(i,nome)