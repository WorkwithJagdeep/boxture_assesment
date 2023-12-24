const { v4: uuidv4, validate: isUUID } = require("uuid");

let users = [];

exports.getUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: users,
  });
};

exports.createUser = (req, res) => {
  const { username, age, hobbies } = req.body;

  if (username && age) {
    let newUser = {
      id: uuidv4(),
      username: username,
      age: age,
      hobbies: hobbies || [],
    };
    users.push(newUser);
    return res.status(201).json({
      status: "success",
      message: "user added successfully",
      data: newUser,
    });
  } else {
    return res.status(400).json({
      status: "failed",
      message: "username and age are required",
    });
  }
};

exports.getUserDetail = async (req, res) => {
  const { userId } = req.params;

  if (!isUUID(userId)) {
    return res.status(400).json({ status: "Failed", error: "Invalid userId" });
  }
  const user = users.find((state) => state.id === userId);

  if (user) {
    return res.status(200).json({
      status: "success",
      data: user,
    });
  } else {
    return res.status(404).json({
      status: "failed",
      error: "user not found",
    });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { username, age, hobbies } = req.body;

  if (!isUUID(userId)) {
    return res.status(400).json({ status: "Failed", error: "Invalid userId" });
  }
  const userIndex = users.findIndex((state) => state.id == userId);
  if (userIndex === -1) {
    return res.status(404).json({ status: "Failed", error: "user not found" });
  } else {
    users[userIndex] = {
      id: userId,
      username: username,
      age: age,
      hobbies: hobbies || [],
    };
    return res.status(200).json({
      status: "success",
      data: users,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!isUUID(userId)) {
    return res.status(400).json({ status: "Failed", error: "Invalid userId" });
  }
  const userIndex = users.findIndex((state) => state.id == userId);
  if (userIndex === -1) {
    return res.status(404).json({ status: "Failed", error: "user not found" });
  } else {
    users.splice(userIndex, 1);
    return res.status(204).json({
      status: "success",
      message: "user deleted successfully",
      data: users,
    });
  }
};
