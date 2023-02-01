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
            defaultValue: false
        },
        CanChangeEvents: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        CanChangeWinners: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        NotAllowed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        IsDeliveryContact: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Users;
}