const express = require("express")
const router = express.Router()
const controller = require("../controllers/user_controller")

router.get("/", controller.renderUserPage)
router.post("/", controller.submitUser)
router.get("/:userId", controller.specificUser)
router.delete("/:userId", controller.deleteUser)
router.patch("/:userId", controller.updateUser)

module.exports = router