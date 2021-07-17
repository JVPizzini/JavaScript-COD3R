const notas = [8.0,7.0,6.9,5.9,4.7,3.5]


// Sem usar o callback

const notasBaixas1 = []

for(let i in notas)
{
    if(notas[i] < 7)
    {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Usando callback

const notasBaixas2 = notas.filter(function (nota)
{
    return nota < 7
}
)

console.log(notasBaixas2)

const notasBaixas3 = (notas.filter(nota => nota < 7))


console.log(notasBaixas3)