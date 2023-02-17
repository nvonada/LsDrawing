module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("Categories", {
        CategoryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DefaultNumberOfWinners: {
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