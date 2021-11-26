const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

mongoose.connect(process.env.DB_URI, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const port = process.env.PORT || "3001";
app.listen(port, () => {
    console.log("Server is running at port 3001");
});