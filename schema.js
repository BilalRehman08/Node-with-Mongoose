const mongoose = require("mongoose")

const post = new mongoose.Schema({
    name: String,
    number: Number,
    created_on: { type: String, default: Date.now }
})

const postmodel = mongoose.model('firstcollection', post)

module.exports = postmodel