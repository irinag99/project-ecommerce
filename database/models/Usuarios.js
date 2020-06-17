module.exports = (sequelize, dataTypes) => {

    const alias = 'Usuario';
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

        apellido: {
            type: dataTypes.STRING,
            notNull: true
        },

        email: {
            type: dataTypes.STRING,
            notNull: true,
            unique: true
        },

        password: {
            type: dataTypes.STRING,
            notNull: true
        },

        rol: {
            type: dataTypes.INTEGER,
            default: 0,
        },

        avatar: {
            type: dataTypes.STRING,
        },

        descripcion: {
            type: dataTypes.STRING,
        },





    }

    const config = {
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);




    return Usuario
}