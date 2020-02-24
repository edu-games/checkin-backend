// const Sequelize = require("sequelize");

const { Client } = require("pg");
const db = new Client({
	user: process.env.DB_USERNAME,
	host: process.env.DB_HOSTNAME,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	port: 5432,
	ssl: true
});

db.connect(err => {
	if (err) {
		console.error("‼️  Unable to connect to the database:", err);
	} else {
		console.log("✅  Database connection has been established successfully.");
	}
});

// const db = new Sequelize(process.env.DATABASE_URL);
// const db = new Sequelize({
// 	username: process.env.DB_USERNAME,
// 	database: process.env.DB_DATABASE,
// 	password: process.env.DB_PASSWORD,
// 	host: process.env.DB_HOSTNAME,
// 	port: 5432,
// 	ssl: true,
// 	dialect: "postgres",
// 	dialectOptions: {
// 		ssl: { require: true }
// 	}
// });

// db.authenticate()
// 	.then(() => {
// 		console.log("✅  Database connection has been established successfully.");
// 	})
// 	.catch(err => {
// 		console.error("‼️  Unable to connect to the database:", err);
// 	});

module.exports = db;
