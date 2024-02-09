const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        enabled: {
            type: DataTypes.BOOLEAN,
        }
    };

    let options = {};

    return sequelize.define('commands', attributes, options);
}