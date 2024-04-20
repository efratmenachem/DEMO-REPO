var fs = require('fs');

//    המשתמש החדש בקובץ טקסט
const Func = function(req, res, next) {
    switch (req.originalUrl) {
        case "/myUsers/addUser":
            const userData = req.body;
            const userInformation = `Name: ${userData.name}, Email: ${userData.email},Password: ${userData.password}, Date: ${new Date().toISOString()}\n`;
            fs.appendFile('./data.txt', userInformation, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("User data appended successfully!");
                }
            });
            break;
        default:
            break;
    }
    next();
};

module.exports = Func;
