//config and imports
const express = require("express");
const app = express();
const cors = require("cors");
const rotas = require("./api/index");
const { sequelize } = require("./models/index");
//global configuration

app.use(express.json());
app.use(cors());
app.use("/", rotas);

sequelize.sync().then(() => {
  console.log("Conexão bem sucedida");
});
app.listen(3000, () => console.log("running"));
