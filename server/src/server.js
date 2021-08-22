//Syncronizando o banco com as models

(async () => {
    const sequelize = require("./db");
    const produtos = require("./model/produtos");
    
    try{
        const result = sequelize.sync({ alter: true });
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}
)()

const { urlencoded } = require("express");
//Configuração do server

const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const routers = require("./routers");

app.use(routers);

app.listen(port, () => {
    console.log("Server running!")
})