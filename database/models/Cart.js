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

            idProduct: dataTypes.INTEGER,

            idUser: dataTypes.INTEGER,

            productName: dataTypes.STRING,
            
            totalPrice: dataTypes.INTEGER

            }

        const config = {
            timestamps: false,
            tableName:'cart'
        }

        const Cart = sequelize.define(alias, cols, config);

        Cart.associate = function (models) {
            // Cart.belongsToMany(models.User, {
            //     as: 'user',
            //     through: 'userCart',
            //     foreignKey: 'idUser',
            //     otherKey: 'idCart',
            //     timestamps: false
            // });
            Cart.belongsTo(models.User, {
                as: 'user',
                foreignKey: 'idUser',
            });


            // Cart.belongsTo(models.Order, {
            //     as: 'order',
            //     foreignKey: 'idOrder',
            // });

            // Cart.belongsToMany(models.Product, {
            //     as: 'product',
            //     through: 'productCart',
            //     foreignKey: 'idProduct',
            //     otherKey: 'idCart',
            //     timestamps: false
            // });

            Cart.belongsTo(models.Product, {
                as: 'product',
                foreignKey: 'idProduct'
            })
        }
        
        
        return Cart
        }