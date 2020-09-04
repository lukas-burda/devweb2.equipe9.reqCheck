"use strict";

console.clear();

const express = require("express");
const routes = require("./routes.js");
const app = express();

app.use('/', routes);

app.get("/", (req, res, next) => {
    res.json({nofap: "september "})
})

const port = 9090

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
