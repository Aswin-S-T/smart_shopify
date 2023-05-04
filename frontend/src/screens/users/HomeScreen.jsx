import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/carousel";
import Rating from "../../components/Rating";
import data from "../../data";

function HomeScreen() {
	return (
		<div>
			<section>
				<Carousel />
			</section>
			<div className="container-fluid">
				<div className="row all-products">
					{data && data.products && data.products.length > 0 ? (
						data.products.map((product) => (
							<>
								<div className="col-md-3">
									<Link to={`/product/${product._id}`}>
										<div className="card mt-2">
											<div className="container">
												<div className="product-image mt-2">
													<img className="w-100" src={product.image} />
												</div>
												<div className="product-details">
													<h2 className="product-name">{product.name}</h2>
													<div className="product-rating">
														{/* <i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i> */}
														<Rating
															rating={product.rating}
															numReviews={product.numReviews}
														></Rating>
													</div>
													<div className="product-price mt-2">
														<h4>{product.price}</h4>
													</div>
												</div>
												<div className="product-actions">
													<div className="row">
														<div className="container">
															<div className="product-cart m-1">
																<button className="btn btn-primary">
																	<i className="fa fa-cart-plus"></i>
																	Add to cart
																</button>
															</div>
															<div className="product-buy m-1">
																<button className="btn btn-success">
																	Buy now
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							</>
						))
					) : (
						<h1>No products Available</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default HomeScreen;
