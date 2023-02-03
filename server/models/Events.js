const { INTEGER, STRING } = require("sequelize");
const Categories = require("./Categories");

module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define("Events", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: "Entries",
                key: "EventId"
            }
        },       
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
        Events.hasOne(models.Categories, {
            foreignKey: "id"
        });

        // Do I need this?!?
        // Events.hasMany(models.Entries, {
        //     foreignKey: "EventId"
        // });
    };

    return Events;
}