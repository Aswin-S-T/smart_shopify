import React from "react";
import Carousel from "./components/carousel";
import Header from "./components/Header";
import HomeScreen from "./screens/users/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/users/ProductScreen";
import CartScreen from "./screens/users/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
	return (
		<BrowserRouter>
			<div>
				

				<main className="main">
					<Routes>
						<Route path="/" exact={true} element={<HomeScreen />} />
						<Route path="/product/:id" element={<ProductScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
					</Routes>
				</main>
				{/* <footer className="p-2">
					<p className="text-white">All the rights are reserved@2023</p>
				</footer> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
