const Register = require("../models/register");
const bcrypt = require("bcrypt");

const handleRegister = async(req, res) => {
    const {
        Name,
        Nameeng,
        Lastname,
        Lastnameeng,
        Username,
        password,
        IDCard,
        School,
        Levelc,
        Tel,
        Title,
        Titleeng,
        Email,
        Role,
    } = req.body;

    try {
        const hashPass = await bcrypt.hash(password, 8);
        const result = await Register.register(
            Name,
            Nameeng,
            Lastname,
            Lastnameeng,
            Username,
            hashPass,
            IDCard,
            School,
            Levelc,
            Tel,
            Title,
            Titleeng,
            Email,
            Role
        );
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const handleRegisTeacher = async(req, res) => {
    const {
        Title,
        Name,
        Lastname,
        Titleeng,
        Nameeng,
        Lastnameeng,
        Username,
        Password,
        Tel,
        Email,
    } = req.body;

    try {
        const Role = "teacher";
        const hashPass = await bcrypt.hash(Password, 8);
        const result = await Register.register(
            Title,
            Name,
            Lastname,
            Titleeng,
            Nameeng,
            Lastnameeng,
            Username,
            hashPass,
            Tel,
            Email,
            Role
        );
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const handleCheckEmail = async(req, res) => {
    // const { Email } = req.body;

    // try {
    //     const result = await Register.checkEmail(Email);
    //     console.log(result);
    //     res.status(200).send(result);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
};

module.exports = {
    handleRegister,
    handleRegisTeacher,
    handleCheckEmail,
};