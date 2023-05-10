const controller = require("../controllers/compoundController");
const express = require("express");
const fileUpload = require("../middlewares/fileUpload");
const router = express.Router();

router
// Bulk creation of Compound
.post("/upload",fileUpload.single('file'), controller.addBulkCompounds)
  
// Add a new Compound
.post("/", controller.addCompound)
  
// Get all compounds with pagination
.get("/", controller.getAllCompounds)
  
// Retrieve a single Compound with id
.get("/:id", controller.getCompoundById)
  
// Update a Compound with id
.patch("/:id", controller.updateCompound)
  
// Delete a Compound with id
.delete("/:id", controller.deleteCompound)
  

module.exports = router;