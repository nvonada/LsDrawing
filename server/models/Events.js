const { INTEGER, STRING } = require("sequelize");
const Categories = require("./Categories");

module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define("Events", {
        Year : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        CategoryId : {
            type : DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Categories",
                key: "id"
            }
        },
        Name : {
            type : DataTypes.STRING,
            allowNull: false
        },
        EventDate : {
            type : DataTypes.DATE,
            allowNull: false
        },
        DrawingDate : {
            type : DataTypes.DATE,
            allowNull: false
        },
        NumberOfWinners : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        UsesParkingPass : {
            type : DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    Events.associate = models => {
        Events.hasOne(models.Categories);
    };

    return Events;
}