const express = require("express")
const router = express.Router()
const controller = require("../controllers/module_controller")

router.post("/add", controller.addModule)
router.get("/", controller.selectAllModules)

module.exports = router