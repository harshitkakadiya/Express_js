const express = require('express');
const { addNewUser, getAllUser, getUser } = require('../controller/user.controller');
const userRoutes = express.Router();

userRoutes.post("/", addNewUser);
userRoutes.post("/", getAllUser);
userRoutes.post("/get-user", getUser);
userRoutes.post("/get-user",updateUser)
userRoutes.post("/",deleteUser)


module.exports = userRoutes;