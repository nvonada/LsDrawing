module.exports = (sequelize, DataTypes) => {
    const winners = sequelize.define("Winners", {
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
        Accepted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });

    winners.associate = models => {
        winners.belongsTo(models.Events, {
            foreignKey: "id",
            onDelete: 'CASCADE'
        });
        
        winners.hasOne(models.Users, {
            foreignKey: "Users",
            as: "UsersAssnAlias"
        });
    };

    return winners;
}