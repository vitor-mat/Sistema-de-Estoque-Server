const routers = require('express').Router();

const express = require('express');
const app = express();

const db = require("./db");

const produtos = require("./model/produtos");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routers.post('/add', async function saveData(req, res){
    const produto1 = await produtos.create({nome: req.body.nome, preco: req.body.preco})

})

routers.get('/produtos', async (req, res) => {
    const allProducts = await produtos.findAll()
    res.json(allProducts)
})


module.exports = {
    routers,
    app
};
