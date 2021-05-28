const express = require("express")
const router = express.Router()
const controller = require("../controllers/profile_controller")
const authorization = require("../middleware/authorization")

router.get("/", authorization, controller.home)

module.exports = router