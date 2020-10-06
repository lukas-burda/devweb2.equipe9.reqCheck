const express = require("express");
const bodyParser = require("body-parser");
const pedidoRoute = require("../routes/pedido-route");
const produtoRoute = require("../routes/produto-route");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use('/pedido', pedidoRoute);
app.use('/produto', produtoRoute);

const port = 9090

app.listen(port, () => {
    console.clear();
    console.log(`Server running on port ${port}`);
});
