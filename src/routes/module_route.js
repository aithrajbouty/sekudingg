const express = require("express")
const router = express.Router()
const controller = require("../controllers/module_controller")

router.post("/add", controller.addModule)
router.get("/", controller.selectAllModules)
router.get("/:id", controller.selectSpecificModule)
router.put("/:id", controller.updateModule)
router.delete("/:id", controller.deleteModule)

module.exports = router