module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        DeliveryEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CanChangeUsers: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        CanChangeEvents: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        CanChangeWinners: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        NotAllowed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        IsDeliveryContact: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
    return Users;
}