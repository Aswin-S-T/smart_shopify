import React from "react";

function Carousel() {
	return (
		<div>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/May-ART/GW/Tallhero_3000x1200_set_3._CB589336404_.jpg"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/Main/Hero/1/Unrec_PC_hero_1_2x_2._CB589393493_.jpg"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/May/MayART/PEA/Watches/Maxima_Launch/Non_prime/3000._CB589350541_.jpg"
							alt="Third slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Cons/MayART23/GW/X-GL/UnRec2_NonPEA_PC_3000._CB590875252_.jpg"
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}

export default Carousel;
