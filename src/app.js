//const path = require("path")
const express = require("express")
// const { set } = require("mongoose")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")

const app = express()

app.use(cors())
app.use(bodyParser.json())

//VIEWS
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "hbs")

//ROUTES
const indexRoute = require("./routes/index_route")
const aboutRoute = require("./routes/about_route")
const authRoute = require("./routes/auth_route")
const moduleRoute = require("./routes/module_route")

app.use("/", indexRoute)
app.use("/about", aboutRoute)
app.use("/auth", authRoute)
app.use("/module", moduleRoute)


//DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log("Connected to database!")
)

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

//LISTEN
app.listen(3000, () => {
    console.log("The server is now running in port 3000.")
})
