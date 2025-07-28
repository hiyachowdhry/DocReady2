const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");
const userRouter = express.Router();

// Route for getting user details by ID
userRouter.get("/getuser/:id", auth, userController.getuser);

// Route for getting all users except the logged-in user
userRouter.get("/getallusers", auth, userController.getallusers);

// Route for user login
userRouter.post("/login", userController.login);

// Route for user registration
userRouter.post("/register", userController.register);

// Route for updating user profile
userRouter.put("/updateprofile", auth, userController.updateprofile);

// Route for deleting a user
userRouter.delete("/deleteuser", auth, userController.deleteuser);

module.exports = userRouter;