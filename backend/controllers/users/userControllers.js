const { successResponse, errorResponse } = require("../../contants/response");
const User = require("../../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("../../models/ProductSchema");
const JWT_SECRET = process.env.JWT_SECRET || "something secret";

module.exports = {
	register: (userData) => {
		return new Promise(async (resolve, reject) => {
			let { phone, email } = userData;
			phone = await User.findOne({ phone });
			email = await User.findOne({ email });
			if (phone || email) {
				errorResponse.message = "User already exists with this phone or email";
				resolve(errorResponse);
			} else {
				let bcryptedPassword = await bcrypt.hash(userData.password, 10);

				userData.password = bcryptedPassword;
				const token = jwt.sign({ phone, email }, JWT_SECRET, {
					expiresIn: "2h",
				});
				userData.token = token;
				await User.create(userData).then((result) => {
					if (result) {
						successResponse.data = result;
						resolve(successResponse);
					} else {
						resolve(errorResponse);
					}
				});
			}
		});
	},
	login: (userData) => {
		return new Promise(async (resolve, reject) => {
			const { email, password } = userData;

			if (!(email && password)) {
				res.status(400).send("All input is required");
			}

			const user = await User.findOne({ email });

			if (user && (await bcrypt.compare(password, user.password))) {
				const token = jwt.sign({ user_id: user._id, email }, JWT_SECRET, {
					expiresIn: "2h",
				});

				user.token = token;

				successResponse.data = user;
				resolve(successResponse);
			}
			resolve(errorResponse);
		});
	},
	getCartItems: (cartIds) => {
		return new Promise(async (resolve, reject) => {
			let productDetails = await Product.find({ _id: { $in: cartIds } });
			if (productDetails) {
				successResponse.data = productDetails;
			} else {
				successResponse.data = [];
			}
			resolve(successResponse);
		});
	},
};
