module.exports = (sequelize, dataTypes) => {

    const alias = 'Producto';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        },

        descripcion: {
            type: dataTypes.STRING,
        },

        imagen: {
            type: dataTypes.STRING,
            notNull: true
        },

        cantidad: {
            type: dataTypes.INTEGER,
            notNull: true
        },


    }

    const config = {
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

     
    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'idCategoria',
        });
    }
     

    return Producto
}