import React from "react";
import Rating from "../../components/Rating";

function ProductScreen() {
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<div className="detail-image">
							<img src="https://m.media-amazon.com/images/I/71OFc-V+HmL._UX569_.jpg" />
						</div>
					</div>
					<div className="col-md-6">
						<>
							<div className="product-details-box w-75 p-4 mt-5">
								<div className="container">
									<h4>Name</h4>
									<Rating rating={"4.5"} numReviews={"12"} />
									<h6>Price : 434</h6>
									<button className="cartbtn m-1">Add to cart</button>
									<button className="buybtn m-2">Buy now</button>
								</div>
							</div>
						</>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
