// novo recurso do ES2015

const pessoa = {
    nome: 'joao',
    idade: 25,
    end: {
        rua: 'ABC',
        numero: 100
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { end: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)