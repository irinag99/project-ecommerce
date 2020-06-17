module.exports = (sequelize, dataTypes) => {

    const alias = 'Pedido';
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
        },

    }

    const config = {
        timestamps: false
    }

    const Pedido = sequelize.define(alias, cols, config);




    return Pedido
}