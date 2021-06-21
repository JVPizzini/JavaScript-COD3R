let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variavel maluca : sem Var e Let !!!

abc = 3 // Não faça isso em casa !!!
console.log(global.abc)

// Module.exports = {e : 123, f: false, g:'Teste'}