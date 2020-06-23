const productController = { 
    vista: (req,res)=>{
        res.render("productView");
    },
    create: (req, res) => {
        res.render('cargarProducto');
    },
    processCreate: (req, res) => {

    }
}


module.exports = productController;