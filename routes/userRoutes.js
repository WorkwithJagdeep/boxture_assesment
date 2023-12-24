const express = require("express");
const {
  getUsers,
  createUser,
  getUserDetail,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:userId").get(getUserDetail).put(updateUser).delete(deleteUser);

module.exports = router;
