/* REQUIRES */
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const indexRouter = require("./routes");
const registerRouter = require("./routes/register");

/* Template engine Config. */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

/* MIDLEWWARES GLOBAL */
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* RUOTES -MIDDLEWARES */
app.use("/", indexRouter);

app.use("/register", registerRouter);

/* Servidor local */
app.listen( PORT, ()=>console.log(`servidor levantado en el puerto ${PORT}\n http://localhost:${PORT}` ));