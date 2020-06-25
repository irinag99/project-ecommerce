module.exports = (sequelize, dataTypes) => {

        const alias = 'Cart';
        const cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unsigned: true,
                notNull: true,
            },
            quantity: {type: dataTypes.INTEGER,
            notNull: true},

            price:{type: dataTypes.INTEGER,
            notNull: true },

            state:{type: dataTypes.INTEGER,
            notNull: true },

            }

        const config = {
            timestamps: false
        }

        const Cart = sequelize.define(alias, cols, config);

        Cart.associate = function (models) {
            Cart.belongsTo(models.User, {
                as: 'user',
                foreignKey: 'idUser',
            });

            Cart.belongsTo(models.Order, {
                as: 'order',
                foreignKey: 'idOrder',
            });

            Cart.belongsTo(models.Product, {
                as: 'product',
                foreignKey: 'idProduct',
            });
        }
        
        
        return Cart
        }