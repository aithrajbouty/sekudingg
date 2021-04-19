const express = require("express")
const router = express.Router()
const controller = require("../controllers/auth_controller")
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")

// router.get("/", controller.renderUserPage)
// router.post("/", controller.submitUser)
// router.get("/:userId", controller.specificUser)
// router.delete("/:userId", controller.deleteUser)
// router.patch("/:userId", controller.updateUser)

router.get("/", controller.selectAllUsers)
router.post("/register", validInfo, controller.register)
router.post("/login", validInfo, controller.login)
router.get("/is-verify", authorization, controller.isVerified)

module.exports = router