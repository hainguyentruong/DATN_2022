const express = require('express');

const router = express.Router();

//middlewares
const { authCheck } = require('../middlewares/auth');

//controller
const { createOrUpdateUser } = require("../controllers/auth");

const myMiddleware = (req, res, next) => {
    console.log("IM A MIDDLEWARE YAY");
    next();
};

router.post('/create-or-update-user', authCheck, createOrUpdateUser);

router.get('/testing', myMiddleware, (req, res) => {
    res.json({
        data: 'YOU SUCCESSFULLY TRIED MIDDLEWARE',
    });
});

module.exports = router;


