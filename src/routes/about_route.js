const express = require("express")
const router = express.Router()
const controller = require("../controllers/about_controller")

router.get('/', controller.renderAboutPage)

module.exports = router