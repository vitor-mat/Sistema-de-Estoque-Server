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

//Configuração do server

const { app, routers } = require("./routers")
const port = 3001;
const cors = require("cors");

app.use(cors())

app.use(routers);

app.listen(process.env.PORT || port, () => {
    console.log("Server running!")
})