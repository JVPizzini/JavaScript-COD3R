const carrinho = [
    '{"nome": "borracha", "preco": 3.5}',
    '{"nome": "caderno", "preco": 13.5}',
    '{"nome": "kit de lápis", "preco": 32.5}',
    '{"nome": "Caneta", "preco": 8.5}',
]

// Retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPrecos)

console.log(resultado)

let soma = 0
resultado.forEach(function(itens){
    return soma += itens
})

console.log(soma)

