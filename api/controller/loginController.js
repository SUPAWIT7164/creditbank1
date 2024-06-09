const Register = require("../models/register");
const bcrypt = require("bcrypt");

const handleChecklogin = async(req, res) => {
    const { USERNAME, PASSWORD } = req.body;
    console.log(USERNAME, PASSWORD)

    try {
        const user = await Register.profile(USERNAME);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    handleChecklogin,
};