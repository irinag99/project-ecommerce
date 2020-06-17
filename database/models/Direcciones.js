module.exports = (sequelize, dataTypes) => {

    const alias = 'Direccion';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        direccion: {
            type: dataTypes.STRING,
            notNull: true
        },

    }

    const config = {
        timestamps: false,
        tableName: 'Direcciones'
    }

    const Direccion = sequelize.define(alias, cols, config);
     


    Direccion.associate = function (models) {
            Direccion.belongsTo(models.Usuario, {
                as: 'usuario',
                foreignKey: 'idUsuario',
            });
        }



    return Direccion
}