const escola = [{
    turma:'turma m1',
    alunos: [{
        nome:'joao',
        nota: 10
    },
    {
        nome:'ana',
        nota:8

    }]
},
{
    turma:'turma m2',
    alunos:[{
        nome:'jr',
        nota: 6
    },
    {
        nome:'kleiton',
        nota: 2
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasDaTurma)

console.log(nota1)
console.log([].concat( [ 10, 8 ], [ 6, 2 ] ))


Array.prototype.flapMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flapMap(getNotasDaTurma)
console.log(notas2)