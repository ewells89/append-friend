const router = require("express").Router();
const developerController = require("../../controller/developer");

// axios.get("/api/developer")
// axios.post("/api/developer", newUser)
router
  .route("/")
  .get(developerController.getALL)
  .post(developerController.create);

// axios.delete("/api/developer/37wu4es5dryxjcgkhv"): id of user to delete
// axios.put("/api/developer/37wu4es5dryxjcgkhv"): id of follower the user would like to add
router
  .route("/:id")
  .get(developerController.getById)
  .delete(developerController.deleteById)
  .put(developerController.editById);

// Route For Liking a developer
router
  .route("/like/:id")
  .put(developerController.addFollower);


module.exports = router;

