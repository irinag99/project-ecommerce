module.exports = (sequelize, dataTypes) => {

    const alias = 'Product';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },

        description: {
            type: dataTypes.STRING,
        },

        image: {
            type: dataTypes.STRING,
            notNull: true
        },

        idCategory: {
            type: dataTypes.INTEGER
        },

        price: {
            type: dataTypes.DECIMAL
        }


    }

    const config = {
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config);

     
    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'idCategory',
        });

        Product.belongsToMany(models.Cart, {
            as: 'cart',
            through: 'productCart',
            foreignKey: 'idcart',
            otherKey: 'idProduct',
            timestamps: false
        });  
    }


     

    return Product
}