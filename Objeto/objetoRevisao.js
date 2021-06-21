// coleção dinâmica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
// delete produto.preco
// delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'a1',
    valor:'100',
        proprietario:{
            nome: 'joao',
            idade:'25',
            endereco: {
                rua:'teste',
                numero: 'teste2'
            }
        },
    consdutores :[{
        nome: 'lucas',
        idade:'18'
    },
    {
        nome:'jv',
        idade:'19'
    }],
    calcularValorDoSeguro: function(){
        //...
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'av teste'

console.log(carro)