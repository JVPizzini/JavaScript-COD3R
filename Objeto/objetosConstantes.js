// Não podemos atribur algo para uma constante.

// Pessoa -> 123 -> {...}

const pessoa = {nome: 'joao'}

pessoa.nome = 'pedro'
console.log(pessoa)

//Pessoa -> 456 -> {...}
//pessoa = {nome:'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)