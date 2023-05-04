const express = require("express");
const {
	getAllProducts,
	getProductDetails,
} = require("../../controllers/users/productController");
const data = require("../../data");
const Product = require("../../models/ProductSchema");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send("User router called");
});

userRouter.get("/products", async (req, res) => {
	await getAllProducts().then((response) => {
		res.send(response);
	});
});

userRouter.get("/product/:id", async (req, res) => {
	let productId = req.params.id;
	await getProductDetails(productId).then((response) => {
		res.send(response);
	});
});

module.exports = userRouter;
