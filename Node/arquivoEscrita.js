const fs = require('fs')

const produto = {
    nome: 'cell',
    preco: 123456.11,
    desconto: 0.15
}


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arqiovo salvo!')
})