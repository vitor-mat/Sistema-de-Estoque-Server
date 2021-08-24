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

routers.delete('/del/:id', async(req, res) => {

    await produtos.destroy({
        where: {
          id: req.params.id
        }
      });

    res.send(`Deletado com sucesso!! / id: ${req.params.id}`)
})

routers.put("/update/:id", async(req, res) => {

    await produtos.update({
        nome: req.body.nome,
        preco: req.body.preco
    },{
        where: {
            id: req.params.id
        }
    })

    res.send("Editado com sucesso")

})

module.exports = {
    routers,
    app
};
