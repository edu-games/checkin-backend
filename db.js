const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const db = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "postgres"
	}
);

module.exports = db;
