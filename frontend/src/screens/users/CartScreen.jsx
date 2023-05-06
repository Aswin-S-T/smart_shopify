import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import { BACKEND_URL } from "../../constants/applicationContants";

function CartScreen() {
	const [cartItems, setCartItems] = useState([]);
	const [cartIds, setCartIds] = useState([]);

	function handleDeleteClick(id) {
		console.log("ID------------------", id);
		const removeItem = cartItems.filter((item) => {
			return item.id !== id;
		});
		localStorage.setItem("cart", removeItem);
		setCartItems(removeItem);
	}

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem("cart"));
		const fetchData = async () => {
			const res = await axios.post(`${BACKEND_URL}/api/v1/user/cart`, {
				cartItems: items,
			});
			if (res) {
				setCartItems(res.data.data);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="cart-screen" style={{ backgroundColor: "whitesmoke" }}>
			<header>
				<Header />
			</header>
			<div className="container-fluid" style={{ marginTop: "100px" }}>
				<h2>Shopping Cart</h2>
				<hr />
				<div className="row">
					<div className="col-md-8">
						{cartItems && cartItems.length > 0 ? (
							cartItems.map((item) => (
								<>
									<div className="cartBox p-4 mt-2">
										<div className="row">
											<div className="col-md-3">
												<div>
													<img className="w-50" src={item.image} />
												</div>
											</div>
											<div className="col-md-7">
												<p>{item.name}</p>
												<p style={{ color: "green" }}>In stock</p>
												<p>Qty</p>
												<select>
													<option>1</option>
												</select>
											</div>
											<div className="col-md-2">
												<h5>Price</h5>
												<h6 style={{ color: "red" }}>Rs : {item.price}</h6>
												<div className="mt-5">
													<button
														className="btn btn-danger"
														onClick={(e) => handleDeleteClick(item._id)}
													>
														Remove
													</button>
												</div>
											</div>
										</div>
									</div>
								</>
							))
						) : (
							<>
								<h3 className="text-center">Your cart is Empty!</h3>
							</>
						)}
					</div>
					<div className="col-md-4 mt-5">
						<div className="cartBox p-4">
							<h4>Subtotal (1 item) : Rs 249.00</h4>
							<button className="buybtn m-2 mt-3">Buy now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartScreen;
