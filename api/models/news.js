const { sqlcmd } = require("../config/dbConnect");
class news {
    constructor(args) {
        Object.assign(this, args);
    }

    // static newsss(
    //     Name,
    //     Nameeng,
    //     Lastname,
    //     Lastnameeng,
    //     Username,
    //     hashPass,
    //     IDCard,
    //     School,
    //     Levelc,
    //     Tel,
    //     Title,
    //     Titleeng,
    //     Email,
    //     Role,

    // ) {
    //     const query = `INSERT INTO USER (Name,Nameeng,Lastname,Lastnameeng,Username,Password,IDCard,School,Levelc,Tel,Title,Titleeng,Role, Email) VALUES ("${Name}","${Nameeng}","${Lastname}","${Lastnameeng}","${Username}","${hashPass}","${IDCard}","${School}","${Levelc}","${Tel}","${Title}","${Titleeng}","${Role}", "${Email}")`;
    //     return sqlcmd(query);
    // }
    // static profile(USERNAME) {
    //     const query = `SELECT * FROM USER WHERE USERNAME = "${USERNAME}"`
    //     return sqlcmd(query);
    // }
}


module.exports = news;