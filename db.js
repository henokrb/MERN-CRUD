require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect(process.env.dbURI)
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database"));
};
