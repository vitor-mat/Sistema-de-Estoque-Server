const { Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../db");


const Produto = sequelize.define('produto', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    preco:{
        type: DataTypes.DOUBLE
    },
    decricao: DataTypes.STRING
});

module.exports = Produto;