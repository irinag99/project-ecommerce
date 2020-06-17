module.exports = (sequelize, dataTypes) => {

        const alias = 'Carrito';
        const cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unsigned: true,
                notNull: true,
            },
            cantidad: {type: dataTypes.INTEGER,
            notNull: true},

            precio:{type: dataTypes.INTEGER,
            notNull: true },

            estado:{type: dataTypes.INTEGER,
            notNull: true },

            }

        const config = {
            timestamps: false
        }

        const Carrito = sequelize.define(alias, cols, config);

        Carrito.associate = function (models) {
            Carrito.belongsTo(models.Usuario, {
                as: 'usuario',
                foreignKey: 'idUsuario',
            });

            Carrito.belongsTo(models.Pedido, {
                as: 'pedido',
                foreignKey: 'idPedido',
            });

            Carrito.belongsTo(models.Producto, {
                as: 'producto',
                foreignKey: 'idProducto',
            });
        }
        
        
        return Carrito
        }