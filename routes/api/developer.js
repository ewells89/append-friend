const router = require("express").Router();
const developerController = require("../../controller/developer");

// axios.get("/api/developer")
// axios.post("/api/developer", newUser)
router
  .route("/")
  // .all(isAuth)
  .get(developerController.getALL)
  .post(developerController.create);

// axios.delete("/api/developer/37wu4es5dryxjcgkhv"): id of user to delete
// axios.put("/api/developer/37wu4es5dryxjcgkhv"): id of follower the user would like to add
router
  .route("/:id")
  .all(isAuth)
  .delete(developerController.deleteById)
  .put(developerController.addFollower);

module.exports = router;

function isAuth(req, res, next) {
  if (req.user) return next();

  res.sendStatus(403);
}
