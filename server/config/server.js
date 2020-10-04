const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const app = express();

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use('/', routes);

const port = 9090

app.listen(port, () => {
    console.clear();
    console.log(`Server running on port ${port}`);
});
