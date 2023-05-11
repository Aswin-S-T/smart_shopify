import React from "react";

function Step1({ data, handleChange, handleNext }) {
	return (
		<div>
			<div className="formBx">
				<h2>Step 1</h2>
				<input type="text" name="step1" value={data} onChange={handleChange} />
				<input
					type="text"
					name="email"
					value={data.email}
					onChange={handleChange}
				/>
				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
}

export default Step1;
