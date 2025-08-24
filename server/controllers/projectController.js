const Project = require("../models/Project");

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const { featured, category } = req.query;
    let filter = {};
    if (featured === "true") filter.featured = true;
    if (category) filter.category = category;

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST new project
exports.createProject = async (req, res) => {
  try {
    const projectData = { ...req.body };
    if (req.body.technologies) {
      projectData.technologies = Array.isArray(req.body.technologies)
        ? req.body.technologies
        : req.body.technologies.split(",").map((tech) => tech.trim());
    }
    if (req.files && req.files.length > 0) {
      projectData.images = req.files.map((file) => file.path);
    }

    const project = new Project(projectData);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
