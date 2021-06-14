const express = require("express")
const router = express.Router()
const controller = require("../controllers/module_controller")

router.get("/:user_id&:module_id", controller.getProgression)
router.post("/", controller.updateProgression)

module.exports = router