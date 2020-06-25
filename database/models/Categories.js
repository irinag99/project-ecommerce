module.exports = (sequelize, dataTypes) => {

    const alias = 'Category';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true,
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },

        description: {
            type: dataTypes.INTEGER
        },
    }

    const config = {
        timestamps: false,
        tableName: 'categories'
    }

    const Category = sequelize.define(alias, cols, config);




    return Category
}