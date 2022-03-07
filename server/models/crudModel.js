const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	companyName: {
		type: String,
		required: [true, "Company Name is required"],
		unique: [true, "Company Name Already Exists"],
	},
	phone: {
		type: String,
		required: [true, "User phone number required"],
		min: [12, "Too Few. Not valid number. Eg. 251-XXX-XXXXXX"],
		max: [12, "Too long. Not valid number. Eg. 251-XXX-XXXXXX"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
	},
	location: {
		type: String,
		required: [true, "Location can't be blank"],
	},
	link: {
		type: String,
	},
	description: {
		type: String,
		required: [true, "description can't be blank"],
	},
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
