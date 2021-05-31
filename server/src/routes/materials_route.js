const express = require("express")
const router = express.Router()
const controller = require("../controllers/materials_controller")

router.post("/", controller.addMaterial)
router.get("/", controller.selectAllMaterials)
router.get("/:id", controller.selectSpecificMaterial)
router.put("/:id", controller.updateMaterial)
router.delete("/:id", controller.deleteMaterial)

module.exports = router