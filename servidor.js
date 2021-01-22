const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => { 
    res.send({ nome: 'Notebook', preco: 123.45})
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.get('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})
