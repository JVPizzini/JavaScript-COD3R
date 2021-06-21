class pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('joao')

p1.falar()

function criarPessoa(nome, idade, sexo){
    return{
        nome,
        idade,
        sexo
    }
}

console.log(criarPessoa('joao',25,'Macho'))
