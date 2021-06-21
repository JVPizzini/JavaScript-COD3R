class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa = new Pessoa('joao')

pessoa.falar()



const criarPessoa = nome => {return{
    falar: () => console.log(`Meu nome é ${nome}`)
}}

const p2 = criarPessoa('lucas')
p2.falar()