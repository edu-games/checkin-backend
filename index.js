require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Sanity Check!"));
app.get("/students", async (req, res) => {
	const { rows } = await db.query(`SELECT * FROM Students`);

	res.status(200).json({ data: rows });
});

app.listen(port, () => console.log(`🚀  Server running on port ${port}!`));
