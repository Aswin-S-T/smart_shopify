const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
	{
		name: { type: String },
		phone: { type: String },
		email: { type: String },
		password: { type: String },
		address1: { type: String },
		address2: { type: String },
		city: { type: String },
		state: { type: String },
		zip: { type: String },
		token: { type: String },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
