const config = require('../config.json')
const { host, port, user, password, database } = config.database;

const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
	console.log("host: "+host)
	console.log("port: "+port)
	
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { 
	  host: 'db',
	  port: 3316,
	  dialect: 'mysql' 
    });

    // init models and add them to the exported db object
    db.Commands = require('../models/commands.model')(sequelize);
    db.User = require('../models/user.model')(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
}
