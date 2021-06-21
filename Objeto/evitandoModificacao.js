// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco : 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal + valores constantes

const pessoa = {nome: 'joao', idade: '25'}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)