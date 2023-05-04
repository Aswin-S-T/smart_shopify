const { successResponse, errorResponse } = require("../../contants/response");
const Product = require("../../models/ProductSchema");

module.exports = {
	getAllProducts: () => {
		return new Promise(async (resolve, reject) => {
			let products = await Product.find();
			if (products) {
				successResponse.data = products;
				resolve(successResponse);
			} else {
				resolve(errorResponse);
			}
		});
	},
	getProductDetails: (productId) => {
		return new Promise(async (resolve, reject) => {
			let product = await Product.findOne({ _id: productId });
			if (product) {
				successResponse.data = product;
				resolve(successResponse);
			} else {
				resolve(errorResponse);
			}
		});
	},
};
