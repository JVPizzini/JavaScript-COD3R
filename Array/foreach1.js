const aprovados = ['joao','vitor','lucas', '-']

aprovados.forEach(function(nome,indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})


aprovados.forEach(nome => console.log(nome))

const exibitAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibitAprovados)