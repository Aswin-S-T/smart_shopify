import React, { useState } from "react";
import MultiStepForm from "../components/form/MultiStepForm";
import Header from "../components/Header";
import BookingScreen from "./BookingScreen.JSX";

function AddessScreen() {
	const [selectedOption, setSelectedOption] = useState("");
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div
			className=""
			style={{ backgroundColor: "whitesmoke", height: "100vh" }}
		>
			<header>
				<Header />
			</header>

			<div className="container-fluid mt-5">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6 mt-5">
						{/* <MultiStepForm /> */}
						<div className="formBx p-4">
							<h4 className="text-center">Enter you address</h4>
							<form>
								<p>Full Name</p>
								<input
									type="text"
									className="form-control"
									placeholder="Enter your name"
								/>
								<p>Address</p>
								<textarea
									className="form-control"
									placeholder="Please enter your permanent address"
								></textarea>
								<p>Payment</p>
								<input
									className="m-2"
									type="radio"
									value="option1"
									checked={selectedOption === "option1"}
									onChange={handleOptionChange}
								/>
								Online Payment
								<input
									className="m-2"
									type="radio"
									value="option2"
									checked={selectedOption === "option2"}
									onChange={handleOptionChange}
								/>{" "}
								Payment by delivary
								<br />
								{/* <BookingScreen /> */}
								<button className="mt-4 submitBtn">Place Order</button>
							</form>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
}

export default AddessScreen;
