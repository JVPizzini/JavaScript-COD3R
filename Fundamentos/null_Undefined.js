// Passagem por valor ou referência

const a = { name: 'teste' }
console.log(a)

const b = a
console.log(b)

b.name = 'Opa'
console.log(b)
console.log(a)

let c = 3

let d = c
d++
console.log(c)
console.log(d)

let valor // não icializado
console.log(valor)

let valor2 = null // ausência de valor
console.log(valor2)
    // console.log(valor2.toSring()) // Erro!


// Null e Undefined

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.5
console.log(produto)

produto.preco = undefined // Evitar atribuir Undefined
console.log(!!produto.preco)
    //delete produto.preco
console.log(produto)

produto.preco = null // sem preço !!!
console.log(!!produto.preco)
console.log(produto)