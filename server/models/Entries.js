const Events = require("./Events");
const Users = require("./Users");

module.exports = (sequelize, DataTypes) => {
    const entries = sequelize.define("Entries", {
        Year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        EventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Events",
                key: "id"
            }
        },
        User: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "Users",
                key: "UserName"
            }
        },
        DrawingRank: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    });

    entries.associate = models => {
        entries.belongsTo(models.Events, {
            foreignKey: "id",
            onDelete: 'CASCADE'
        });
        
        entries.hasOne(models.Users, {
            foreignKey: "Users",
            as: "UsersAssnAlias"
        });
    };

    return entries;
}