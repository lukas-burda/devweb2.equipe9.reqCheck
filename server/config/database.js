const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://lukas:luk020900@desenvweb2.jm0tg.gcp.mongodb.net/desenvweb2?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected with success");
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected with success");
});

mongoose.connection.on("error", (error) => {
    console.log(`Any error ocurred. \n${error}`);
});

module.exports = db;