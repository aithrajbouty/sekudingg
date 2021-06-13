const express = require("express")
const router = express.Router()
const controller = require("../controllers/modulsaya_controller")

router.post("/enroll", controller.enrollStudent)
router.get("/", controller.selectAllEnrollments)
router.delete("/", controller.deleteEnrollment)
router.get("/:id", controller.selectSpecificEnrollment)

module.exports = router