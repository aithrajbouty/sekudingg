const express = require("express")
const router = express.Router()
const controller = require("../controllers/aboutUs_controller")

router.get("/count", controller.countUsers)

module.exports = router