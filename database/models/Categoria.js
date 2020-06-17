module.exports = (sequelize, dataTypes) => {

    const alias = 'Categoria';
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
            type: dataTypes.INTEGER
        },
    }

    const config = {
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);




    return Categoria
}