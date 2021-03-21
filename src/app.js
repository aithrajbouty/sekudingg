const path = require("path")
const express = require("express")
// const { set } = require("mongoose")
const app = express()
const router = require("./router")
const mongoose = require("mongoose")

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "hbs")

app.use("/", router)

//DB
const mongoDB = "mongodb+srv://ajb:1234@sekuding.qdzas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(3000, () => {
    console.log("The server is now running in port 3000.")
})
