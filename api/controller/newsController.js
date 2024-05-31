const bcrypt = require("bcrypt");
const news = require('../models/news')
    // const handleNews = async(req, res) => {
    //     const { USERNAME, PASSWORD } = req.body;
    //     console.log(USERNAME, PASSWORD)

//     try {
//         const user = await news.profile(USERNAME);
//         // if (user.length > 0) {
//         //     const match = await bcrypt.compare(PASSWORD, user[0].PASSWORD);
//         // } else {
//         //     res.sendStatus(401);
//         // }
//         console.log(user)
//         res.status(200).send(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
const handleFileUpload = async(req, res) => {
    const {} = req.body;
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        const filePath = path.join(__dirname, 'uploads', file.filename);

    } catch (error) {

    }
}



module.exports = {
    // handleNews,
    handleFileUpload,
};