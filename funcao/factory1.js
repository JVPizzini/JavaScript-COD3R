const prod1 = 
{
    nome: 'nome',
    preco: 50
}

// factory simples

function criarPessoa(){
    return{
        nome:'nome',
        sobreNome: 'fulana'
    }
}

console.log(criarPessoa())

