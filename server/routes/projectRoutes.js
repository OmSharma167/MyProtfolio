const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
} = require("../controllers/projectController");
const authenticateToken = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

router.get("/", getProjects);
router.post("/", authenticateToken, upload.array("images", 5), createProject);

module.exports = router;
