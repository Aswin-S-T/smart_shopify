import React from "react";

function Step3({ data, handleChange, handleNext }) {
	return (
		<div>
			<div>
				<h2>Step 3</h2>
				<input type="text" name="step2" value={data} onChange={handleChange} />
				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
}

export default Step3;
