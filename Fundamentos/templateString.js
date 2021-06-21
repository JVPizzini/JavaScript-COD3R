const nome = 'rebeca'
const concatenacao = 'Rebeca' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Expressões

console.log(`1 + 1= ${ 1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Eii... ${up('cudado')}!`)



console.log(`OI
ESSE É UM EXEMPLO
QUE EU CONSIGO PULAR LINHAS
SEM PRECISAR CONCATENAR, SÓ PRECISO USAR CRASES `)