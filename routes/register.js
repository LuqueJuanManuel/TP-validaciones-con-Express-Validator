const express = require("express");
const router = express.Router();
const controller = require("../controllers/registerController");
const { check} = require("express-validator");

let validateRegister = [
    check("name")
    .notEmpty().withMessage("Debes ingresar un nombre").bail()
    .isLength({min:1}).withMessage("El nombre debe tener mas de un caracter"),

    check("last_name")
    .notEmpty().withMessage("Debes ingresar un Apellido").bail()
    .isLength({min:1}).withMessage("El apellido debe tener mas de un caracter"),

    check("email")
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes ingresar un email valido"),

    check("password")
    .notEmpty().withMessage("debes completar la contraseña").bail()
    .isLength({min:5}).withMessage("La contraseña debe tener mas de 5 caracteres")
];

/* RUTA - register */
router.get("/", controller.index); 
router.post("/", validateRegister, controller.processRegister);



module.exports = router;