const Register = require("../models/register");
const bcrypt = require("bcrypt");

const handleChecklogin = async(req, res) => {
    const { USERNAME, PASSWORD } = req.body;
    console.log(USERNAME, PASSWORD)

    try {
        const user = await Register.profile(USERNAME);
        // if (user.length > 0) {
        //     const match = await bcrypt.compare(PASSWORD, user[0].PASSWORD);
        // } else {
        //     res.sendStatus(401);
        // }
        console.log(user)
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    handleChecklogin,
};