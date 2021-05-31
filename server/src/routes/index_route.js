const express = require("express")
const router = express.Router()
//const controller = require("../controllers/index_controller")

//router.get('/', controller.renderHomePage)
//router.post("/", controller.getWord)
router.get("/", function (req,res){
    res.sendFile(path + "index.html")
})

module.exports = router