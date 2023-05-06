import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
	let [cart, setCart] = useState(0);
	useEffect(() => {
		let cartItems = JSON.parse(localStorage.getItem("cart"));
		setCart(cartItems);
	}, []);
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light">
				<a class="navbar-brand text-white" href="/">
					<i className="fa fa-shopping-cart"></i> shopify
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link text-white" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#">
								Link
							</a>
						</li>
					</ul>
					<form class="form-inline my-2 my-lg-0 text-white">
						<a href="/cart">Cart</a>
						<i className="fa fa-shopping-cart"></i>
						<span class="badge badge-pill badge-danger">
							{cart ? cart.length : 0}
						</span>
						<div class="dropdown">
							<div
								class="dropdown-toggle"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Account
							</div>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" href="#">
									Profile
								</a>
								<a class="dropdown-item" href="/login">
									Logout
								</a>
							</div>
						</div>
					</form>
				</div>
			</nav>
		</div>
	);
}

export default Header;
