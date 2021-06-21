const alunos = [
    {nome: 'joao', nota:10, bolsista: true}, 
    {nome: 'maria', nota:8.2, bolsista:false},
    {nome: 'jose', nota:6.4, bolsista:true},
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado)