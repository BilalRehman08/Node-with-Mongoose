const { request, response } = require("express");
const express = require("express")
const app = express()
const port = 5000;


const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:admin@cluster0.wmqa3.mongodb.net/user",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


mongoose.connection.on("connected", () => console.log("Successfully Connected"))
mongoose.connection.on("error", () => console.log(`Error: ${error.message}`))




// Middleware
app.use("/", (request, response, next) => {
    const condition = false
    if (condition) {
        next()
    }
    else {
        response.send("Unauthorized")
    }
})


app.get("/", (request, response) => {
    response.send("Home Page")
})


app.listen(port, () => console.log(`My server is running on port: ${port}`))