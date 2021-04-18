const express = require("express")
const router = express.Router()
const controller = require("../controllers/auth_controller")

// router.get("/", controller.renderUserPage)
// router.post("/", controller.submitUser)
// router.get("/:userId", controller.specificUser)
// router.delete("/:userId", controller.deleteUser)
// router.patch("/:userId", controller.updateUser)

router.post("/register", controller.register)
// router.post("/login", controller.login)
// router.get("/", controller.selectAllUsers)

module.exports = router