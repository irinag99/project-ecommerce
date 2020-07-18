const express = require ("express");
const app = express();
const path = require("path");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewares/authMiddleware');
const guestMiddleware = require('./middlewares/guestMiddleware');
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');
const contadorMiddleware = require('./middlewares/contadorMiddleware');
const methodOverride = require("method-override");
const cors =  require("cors")

//SETEAR METODO OVERRIDE
app.use(methodOverride("_method"));

//SETEAR ARCHIVOS ESTÁTICOS , CSS , IMAGENES , ETC. 
app.use(express.static(__dirname + '/public'));

//SETEAR MOTOR GRÁFICO (EJS)
app.set("views", path.join(__dirname,"/views"));
app.set("view engine","ejs");

//CAPTURAR DATOS QUE RECIBAMOS POR POST, ALMACENARNOS EN FORMA DE OBJETO LITERAL Y PODER GUARDARLOS EN FORMATO JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'proyecto',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(cookieAuthMiddleware);
app.use(contadorMiddleware);
app.use(cors());
// RUTAS !
const homeRouter= require("./routes/homeRouter");
app.use ("/", homeRouter);

const productRouter = require("./routes/productRouter");
app.use("/product", productRouter);

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const cartRouter = require('./routes/cartRouter');
app.use("/cart",authMiddleware,cartRouter);

const categoryRouter = require('./routes/categoryRouter');
app.use('/category', categoryRouter);

const apiRouter = require('./routes/apiRoutes/apiRouter');
app.use('/api', apiRouter );

app.use((req,res,next)=> {
    res.status(404).render("error")
})



// EMPEZAR SERVER

app.listen(3030,()=>{console.log("Server running port 3030")});
