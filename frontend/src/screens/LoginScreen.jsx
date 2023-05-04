import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/applicationContants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		let loginData = {
			email,
			password,
		};
		await axios
			.post(`${BACKEND_URL}/api/v1/user/login`, loginData)
			.then((response) => {
				if (response) {
					if (response.data.code == 200) {
						Swal.fire({
							icon: "success",
							title: "Success!",
							text: "Successfully loggedin",
						}).then(() => {
							localStorage.setItem("user", JSON.stringify(response.data));
							localStorage.setItem(
								"access_token",
								JSON.stringify(response.data.data.token)
							);
							navigate("/");
						});
					} else {
						Swal.fire({
							icon: "error",
							title: "Invalid credentials",
							text: "Check your email or password",
						});
					}
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
					});
				}
			});
	};
	return (
		<div className="loginScreen">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="formBx p-5">
							<h3 className="text-center">SignIn</h3>
							<form className="mt-4" onSubmit={handleLogin}>
								<div class="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input
										type="email"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										onChange={(e) => setEmail(e.target.value)}
									/>
									<small id="emailHelp" class="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Password</label>
									<input
										type="password"
										class="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<button type="submit" class="submitBtn">
									SignIn
								</button>
							</form>
							<a
								href="/register"
								className="mt-5"
								style={{ color: "#111", top: "20px", position: "relative" }}
							>
								Create new Account ?
							</a>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
