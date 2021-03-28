const express = require("express")
const router = express.Router()
const controller = require("../controllers/index_controller")

router.get('/', controller.renderHomePage)
router.post("/", controller.getWord)

module.exports = router