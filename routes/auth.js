const router = require("express").Router();
const User = require("../model/User");
const validation = require("../validation");

router.post("/register", async (req, res) => {
    const value = await validation.registerValidation(req.body);
    if (value.error) return res.status(400).send(error.details[0].message);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const saveUser = await user.save();
        res.send(saveUser);
    } catch (ex) {
        res.status(400).send(ex);
    }
});

module.exports = router;
