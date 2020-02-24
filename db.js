const Sequelize = require("sequelize");

// const db = new Sequelize(process.env.DATABASE_URL);
const db = new Sequelize({
	username: process.env.DB_USERNAME,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOSTNAME,
	port: 5432,
	ssl: true,
	dialect: "postgres",
	dialectOptions: {
		ssl: { require: true }
	}
});

db.authenticate()
	.then(() => {
		console.log("✅  Database connection has been established successfully.");
	})
	.catch(err => {
		console.error("‼️  Unable to connect to the database:", err);
	});

module.exports = db;
