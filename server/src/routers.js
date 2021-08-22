const routes = require('express').Router();

routes.get('/', async (req, res) => {
    res.send("hellow world");
    sequelize.close()
})


module.exports = routes;
