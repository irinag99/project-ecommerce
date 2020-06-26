module.exports = (sequelize, dataTypes) => {

    const alias = 'Adress';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        adress: {
            type: dataTypes.STRING,
            notNull: true
        },

    }

    const config = {
        timestamps: false,
        tableName: 'Adresses'
    }

    const Adress = sequelize.define(alias, cols, config);
     


    Adress.associate = function (models) {
            Adress.belongsTo(models.User, {
                as: 'user',
                foreignKey: 'idUser',
            });
        }



    return Adress
}