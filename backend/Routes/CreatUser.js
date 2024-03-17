const express = require('express');
const router = express.Router();
const User = require('../models/User');
const{body,ValidationResult}=require('express-validator');
router.post("/creatuser",
[
    body("email").isEmail(),
    body("name").isLength({min:5}),
    body("password","incorrect password").isLength({min:5})

],
async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
