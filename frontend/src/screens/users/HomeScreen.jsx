import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/carousel";
import Rating from "../../components/Rating";
import data from "../../data";
import axios from "axios";
import { BACKEND_URL } from "../../constants/applicationContants";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

function HomeScreen() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			try {
				let res = await axios.get(`${BACKEND_URL}/api/v1/user/products`);
				setLoading(false);
				setProducts(res.data.data);
			} catch (error) {
				setLoading(false);
				setError(error.message);
			}
		};
		fetchData();
	}, []);
	return (
		<div style={{ backgroundColor: "whitesmoke" }}>
			<section>
				<Carousel />
			</section>
			<div className="container-fluid">
				<div className="row all-products">
					{loading ? (
						<LoadingBox />
					) : error ? (
						<MessageBox />
					) : (
						<>
							{products && products.length > 0 ? (
								products.map((product) => (
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
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default HomeScreen;
