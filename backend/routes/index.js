const express = require('express');
const userRouter = require('./user')
const accountRouter = require('./account');
const { authMiddleware } = require('../middleware');
const { User } = require("../db");


const router = express.Router();

router.get("/", authMiddleware, async(req, res) => {
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        res.redirect("/dashboard");
    }
    else {
    res.redirect("/signup");
  }
});

router.use('/user',userRouter)
router.use('/account',accountRouter)

module.exports = router;