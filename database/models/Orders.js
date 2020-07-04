module.exports = (sequelize, dataTypes) => {

    const alias = 'Order';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        total: {
            type: dataTypes.INTEGER,
            notNull: true
        }

    }

    const config = {
        timestamps: false
    }

    const Order = sequelize.define(alias, cols, config);
    
    
    Order.associate = function(models){
        Order.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'idOrder',
        });

        Order.belongsTo(models.User, {
            as: 'user',
            foreignKey:'idUser'
        })
    }
   


    return Order
}