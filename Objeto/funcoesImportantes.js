// Conteudo

// asseco ao objeto como Object.keys(), Object.values(), Object.entries() 
// Object.defineProperty()
// Object.freeze()
// Object.assign


const pessoa = {
    nome:'joao',
    idade:'2',
    peso:'80'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}) 

// OR

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2020'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 5}
const obj = Object.assign(dest,o1,o2)
Object.freeze(obj)

obj.c = 123
console.log(obj)