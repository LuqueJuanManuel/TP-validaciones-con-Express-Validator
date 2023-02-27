/* REQUIRES */
const {validationResult} = require("express-validator");
const {users, writeUsersJson} = require("../data")

module.exports = {
    index: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let lastId = 0;

            users.forEach(user => {
             if(user.id > lastId) {
                 lastId = user.id;
             }
            });
     
            let newUser = {
             id: lastId + 1,
             name: req.body.name,
             last_name: req.body.last_name,
             email: req.body.email,
            password: req.body.password,
            }

            users.push(newUser);
     
            writeUsersJson(users);

            res.send("usuario creado con exito")
        } else {
            res.render("register", {
                errors: errors.mapped(),
                old : req.body,
            })
        }
    }
}