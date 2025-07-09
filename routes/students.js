const express = require("express");
const router = express.Router();
const { studentsHandler, studentDetailHandler } = require("../controllers/studentController");
const { requireAuth, requirePermission } = require("../middleware/auth");


router.get("/", requireAuth, requirePermission('students'), studentsHandler)
router.get("/:id", requireAuth, requirePermission('students'), studentDetailHandler)


module.exports = router;