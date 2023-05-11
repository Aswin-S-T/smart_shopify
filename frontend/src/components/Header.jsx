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
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand text-white" href="/">
					<i className="fa fa-shopping-cart"></i> shopify
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Link
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0 text-white">
						<a href="/cart">Cart</a>
						<i className="fa fa-shopping-cart"></i>
						<span className="badge badge-pill badge-danger">
							{cart ? cart.length : 0}
						</span>
						<div className="dropdown">
							<div
								className="dropdown-toggle"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Account
							</div>
							<div
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton"
							>
								<a className="dropdown-item" href="#">
									Profile
								</a>
								<a className="dropdown-item" href="/dashboard">
									Dashboard
								</a>
								<a className="dropdown-item" href="/login">
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
