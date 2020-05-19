const express = require ("express");
const app = express();
const path = require("path");


//SETEAR ARCHIVOS ESTÁTICOS , CSS , IMAGENES , ETC. 
app.use(express.static(__dirname + '/public'));

//SETEAR MOTOR GRÁFICO (EJS)
app.set("views", path.join(__dirname,"/views"));
app.set("view engine","ejs");

//CAPTURAR DATOS QUE RECIBAMOS POR POST, ALMACENARNOS EN FORMA DE OBJETO LITERAL Y PODER GUARDARLOS EN FORMATO JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// RUTAS !
const homeRouter= require("./routes/homeRouter")
app.use ("/", homeRouter);
const productView = require("./routes/productView");
app.use("/product", productView);
const loginRouter = require('./routes/loginRouter');
app.use('/login', loginRouter);

// EMPEZAR SERVER

app.listen(3030,()=>{console.log("Server running port 3030")});
