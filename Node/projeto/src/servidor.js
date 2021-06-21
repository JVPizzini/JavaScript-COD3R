const porta = 3003
const express = require('express')
const app = express()

const BD = require ('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

// GET - Para obter informações
app.get('/produtos', (req, res, next) =>{
    res.send(BD.getProdutos()) // Vai ser convertido em JSON
})

app.get('/produtos/:id',(req, res, next) =>{
    res.send(BD.getProduto(req.params.id))
})

// POST - Para inserir informação 
app.post('/produtos', (req, res, next) =>{
    const produto = BD.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Vai ser convertido em JSON
})

// PUT - Para editar uma informação
app.put('/produtos/:id', (req, res, next) =>{
    const produto = BD.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Vai ser convertido em JSON
})

// DELETE - Deletar alguma informação
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = BD.excluirProduto(req.params.id)
    res.send(produto) // Vai ser convertido em JSON
})


app.listen(porta,() => {
    console.log(`O servidor esta executando na porta ${porta}.`)
})