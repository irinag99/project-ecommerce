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



    }

    const config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

     
    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'idCategory',
        });

        
    }


     

    return Product
}