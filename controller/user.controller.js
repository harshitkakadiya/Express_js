const express = require('express');

const userRoutes = express();

const {
    getUser,
    addUser,
    // getSingleUser
} = require('../controller/user.controller');

userRoutes.get('/', getUser);

userRoutes.post('/', addUser);



module.exports = userRoutes;