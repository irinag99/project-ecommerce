module.exports = (sequelize, dataTypes) => {

    const alias = 'Address';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        address: {
            type: dataTypes.STRING,
            notNull: true
        },
        idUser: dataTypes.INTEGER

    }

    const config = {
        timestamps: false,
        tableName: 'Addresses'
    }

    const Address = sequelize.define(alias, cols, config);
     


    Address.associate = function (models) {
            Address.belongsTo(models.User, {
                as: 'user',
                foreignKey: 'idUser',
            });
        }



    return Address
}