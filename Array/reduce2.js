const alunos = [
    {nome: 'joao', nota:10, bolsista: true}, 
    {nome: 'maria', nota:8.2, bolsista:false},
    {nome: 'jose', nota:6.4, bolsista:true},
]


// Desafio 1: Todos os alunos são bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Todos os alunos são bolsistas ?

const algumBolsistas = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))