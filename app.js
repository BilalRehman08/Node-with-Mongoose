const { request, response } = require("express");
const express = require("express")
const app = express()
const port = 5000;
const postmodel = require("./schema")

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:admin@cluster0.wmqa3.mongodb.net/user",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


mongoose.connection.on("connected", () => console.log("Successfully Connected"))
mongoose.connection.on("error", () => console.log(`Error: ${error.message}`))


app.get("/add", (request, response) => {
    postmodel.create({ name: "Bilal", number: "03442898491" }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            response.send(data)
            console.log(data)
        }
    })
})

app.get("/find", (request, response) => {
    postmodel.find({ name: "Bilal" }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            response.send(data)
            console.log(data)
        }
    })
})

app.get("/update", (request, response) => {
    postmodel.findOneAndUpdate({ name: "Bilal" }, { name: "Ali" }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            response.send(data)
            console.log(data)
        }
    })
})

app.get("/delete", (request, response) => {
    postmodel.deleteMany({ name: "Bilal" }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            response.send(data)
            console.log(data)
        }
    })
})




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