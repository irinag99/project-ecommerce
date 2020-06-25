module.exports = (sequelize, dataTypes) => {

    const alias = 'Imgproduct';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        route: { 
            type: dataTypes.STRING,
            notNull: true
        },

    }

    const config = {
        timestamps: false
    }

    const Imgproduct = sequelize.define(alias, cols, config);

    Imgproduct.associate = function (models) {
            Imgproduct.belongsTo(models.Product, {
                as: 'product',
                foreignKey: 'idProduct',
            });
      }

    return Imgproduct
}