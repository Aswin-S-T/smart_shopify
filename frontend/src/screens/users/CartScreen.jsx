import React from "react";

function CartScreen() {
	return (
		<div className="cart-screen">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8">
						<h2>Shopping Cart</h2>
						<hr />
						<div className="cartBox p-4 mt-2">
							<div className="row">
								<div className="col-md-3">
									<div>
										<img src="https://m.media-amazon.com/images/I/31buVMONviL._AC_AA180_.jpg" />
									</div>
								</div>
								<div className="col-md-7">
									<p>
										S.stock Black&White Football with Pump (Size-5,
										Soccer)S.stock Black&White Football with Pump (Size-5,
										Soccer)
									</p>
									<p style={{ color: "green" }}>In stock</p>
									<p>Qty</p>
									<select>
										<option>1</option>
									</select>
								</div>
								<div className="col-md-2">
									<h5>Price</h5>
									<h6 style={{ color: "red" }}>Rs : 893</h6>
									<div className="mt-5">
										<button className="btn btn-danger">Remove</button>
									</div>
								</div>
							</div>
						</div>
						<div className="cartBox p-4 mt-2">
							<div className="row">
								<div className="col-md-3">
									<div>
										<img src="https://m.media-amazon.com/images/I/31buVMONviL._AC_AA180_.jpg" />
									</div>
								</div>
								<div className="col-md-7">
									<p>
										S.stock Black&White Football with Pump (Size-5,
										Soccer)S.stock Black&White Football with Pump (Size-5,
										Soccer)
									</p>
									<p style={{ color: "green" }}>In stock</p>
									<p>Qty</p>
									<select>
										<option>1</option>
									</select>
								</div>
								<div className="col-md-2">
									<h5>Price</h5>
									<h6 style={{ color: "red" }}>Rs : 893</h6>
									<div className="mt-5">
										<button className="btn btn-danger">Remove</button>
									</div>
								</div>
							</div>
						</div>
						<div className="cartBox p-4 mt-2">
							<div className="row">
								<div className="col-md-3">
									<div>
										<img src="https://m.media-amazon.com/images/I/31buVMONviL._AC_AA180_.jpg" />
									</div>
								</div>
								<div className="col-md-7">
									<p>
										S.stock Black&White Football with Pump (Size-5,
										Soccer)S.stock Black&White Football with Pump (Size-5,
										Soccer)
									</p>
									<p style={{ color: "green" }}>In stock</p>
									<p>Qty</p>
									<select>
										<option>1</option>
									</select>
								</div>
								<div className="col-md-2">
									<h5>Price</h5>
									<h6 style={{ color: "red" }}>Rs : 893</h6>
									<div className="mt-5">
										<button className="btn btn-danger">Remove</button>
									</div>
								</div>
							</div>
						</div>
						<div className="cartBox p-4 mt-2">
							<div className="row">
								<div className="col-md-3">
									<div>
										<img src="https://m.media-amazon.com/images/I/31buVMONviL._AC_AA180_.jpg" />
									</div>
								</div>
								<div className="col-md-7">
									<p>
										S.stock Black&White Football with Pump (Size-5,
										Soccer)S.stock Black&White Football with Pump (Size-5,
										Soccer)
									</p>
									<p style={{ color: "green" }}>In stock</p>
									<p>Qty</p>
									<select>
										<option>1</option>
									</select>
								</div>
								<div className="col-md-2">
									<h5>Price</h5>
									<h6 style={{ color: "red" }}>Rs : 893</h6>
									<div className="mt-5">
										<button className="btn btn-danger">Remove</button>
									</div>
								</div>
							</div>
						</div>
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
