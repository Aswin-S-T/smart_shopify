import React from "react";

function RegisterScreen() {
	return (
		<div className="loginScreen">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="formBx p-5">
							<h3 className="text-center">Create new Account</h3>
							<form className="mt-4">
								<div className="form-row">
									<div className="form-group col-md-6">
										<label for="inputEmail4">Name</label>
										<input
											type="text"
											className="form-control"
											id="inputEmail4"
											placeholder="Name"
										/>
									</div>
									<div className="form-group col-md-6">
										<label for="inputPassword4">Mobile Number</label>
										<input
											type="text"
											className="form-control"
											id="inputPassword4"
											placeholder="Mobile number"
										/>
									</div>
									<div className="form-group col-md-6">
										<label for="inputEmail4">Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail4"
											placeholder="Email"
										/>
									</div>
									<div className="form-group col-md-6">
										<label for="inputPassword4">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword4"
											placeholder="Password"
										/>
									</div>
								</div>
								<div className="form-group">
									<label for="inputAddress">Address</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="1234 Main St"
									/>
								</div>
								<div className="form-group">
									<label for="inputAddress2">Address 2</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										placeholder="Apartment, studio, or floor"
									/>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label for="inputCity">City</label>
										<input
											type="text"
											className="form-control"
											id="inputCity"
										/>
									</div>
									<div className="form-group col-md-4">
										<label for="inputState">State</label>
										<select id="inputState" className="form-control">
											<option selected>Choose...</option>
											<option>...</option>
										</select>
									</div>
									<div className="form-group col-md-2">
										<label for="inputZip">Zip</label>
										<input type="text" className="form-control" id="inputZip" />
									</div>
								</div>

								<button type="submit" className="submitBtn mt-2">
									Regsister
								</button>
							</form>
							<a
								href="/login"
								className="mt-5"
								style={{ color: "#111", top: "20px", position: "relative" }}
							>
								Alredy have an Account ?
							</a>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
}

export default RegisterScreen;
