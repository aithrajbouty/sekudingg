const express = require("express")
const { pool } = require("./dbConfig")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.json()) //req.body

// ROUTES
const authRoute = require("./routes/auth_route")
const moduleRoute = require("./routes/module_route")
// const aboutUsRoute = require("./routes/aboutUs_route")

app.use("/auth", authRoute)
app.use("/module", moduleRoute)
// app.use("/aboutUs", aboutUsRoute)

//LISTEN
app.listen(3000, () => {
    console.log("The server is now running in port 3000.")
})
