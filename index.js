const express = require("express");
const app = express();
require("dotenv").config();


app.get('/', (req,res) => {
    res.send("hello")
})

app.get('/name', (req,res) => {
    res.send(`The name is ${process.env.NAME}`)
})

app.listen(8000, () => {
     console.log("Listening on Port 8000")
})