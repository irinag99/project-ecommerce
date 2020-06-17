module.exports = (sequelize, dataTypes) => {

    const alias = 'Imgproducto';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        ruta: { 
            type: dataTypes.STRING,
            notNull: true
        },

    }

    const config = {
        timestamps: false
    }

    const Imgproducto = sequelize.define(alias, cols, config);

    Imgproducto.associate = function (models) {
            Imgproducto.belongsTo(models.Producto, {
                as: 'producto',
                foreignKey: 'idProducto',
            });
      }

    return Imgproducto
}