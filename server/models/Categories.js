module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("Categories", {
        CategoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CategoryName: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });

    return Categories;
}