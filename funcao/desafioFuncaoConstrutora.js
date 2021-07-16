

class pessoa{
    constructor(nome,idade){
        this.nome = nome
        ,this.idade = idade
    }

    falar(){
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} de idade`)
    }
}

const p1 = new pessoa('joao',26)

p1.falar()

function criarPessoa(nome, idade, sexo){
    return{
        nome,
        idade,
        sexo
    }
}
console.log(criarPessoa('joao',25,'Macho'))


const pessoaA = nome => {
    return {nome,
        falar: () => console.log(`ola estamos aqui ${nome}`)
    }
}

const pessoa2 = pessoaA('joaozinho')
pessoa2.falar()

console.log(pessoa2.nome)
