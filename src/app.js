const path = require("path")
const express = require("express")
// const { set } = require("mongoose")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv/config")


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
const postsRoute = require("./routes/posts_route")
const usersRoute = require("./routes/users_route")

app.use("/", indexRoute)
app.use("/about", aboutRoute)
app.use("/post", postsRoute)
app.use("/user", usersRoute)


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
