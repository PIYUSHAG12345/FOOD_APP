const express = require('express');
const router = express.Router();
const User = require('../models/User');
const{body,ValidationResult}=require('express-validator');

const bcrpyt=require("bcrypt");
router.post("/creatuser",
[
    body("email").isEmail(),
    body("name").isLength({min:5}),
    body("password","incorrect password").isLength({min:5})

],
async (req, res) => {
    const salt=await bcrpyt.genSalt(10);
    let setPassword =await bcrpyt.hash(req.body.password,salt);
    try {
        await User.create({
            name: req.body.name,
            password: setPassword,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});


router.post("/loginuser",async (req, res) => {
    try {
        await User.findOne
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});
module.exports = router;
