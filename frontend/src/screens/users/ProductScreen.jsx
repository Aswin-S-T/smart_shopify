import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Rating from "../../components/Rating";
import { BACKEND_URL } from "../../constants/applicationContants";
import { useParams } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../actions/productActions";

function ProductScreen() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	let productId = id;
	useEffect(() => {
		dispatch(detailsProduct(productId));
	}, [dispatch, productId]);

	return (
		<div>
			<header>
				<Header />
			</header>
			{loading ? (
				<LoadingBox />
			) : error ? (
				<MessageBox />
			) : (
				<>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<div className="detail-image">
									<img src={product.image} />
								</div>
							</div>
							<div className="col-md-6 mt-5">
								<>
									<div className="product-details-box w-75 p-4 mt-5">
										<div className="container">
											<h4>{product.name}</h4>
											<Rating
												rating={product.rating}
												numReviews={product.numReviews}
											/>
											<h6>Price : {product.price}</h6>
											<button className="cartbtn m-1">Add to cart</button>
											<button className="buybtn m-2">Buy now</button>
										</div>
									</div>
								</>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ProductScreen;
