import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		step1: "",
		email: "",
		step2: "",
		step3: "",
		// Add more steps as needed
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("FINAL DATA-----------", event.target.value);
		console.log("FORM DATA----------", formData);
		// Perform form submission logic
	};

	const handleNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const handlePrevious = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	// Render different steps based on currentStep
	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<Step1
						data={(formData.step1, formData.email)}
						handleChange={handleChange}
						handleNext={handleNext}
					/>
				);
			case 2:
				return (
					<Step2
						data={formData.step2}
						handleChange={handleChange}
						handleNext={handleNext}
						handlePrevious={handlePrevious}
					/>
				);
			case 3:
				return (
					<Step3
						data={formData.step3}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handlePrevious={handlePrevious}
					/>
				);
			// Add more cases for additional steps
			default:
				return null;
		}
	};

	return (
		<div>
			<h1>Multi-Step Form</h1>
			<form onSubmit={handleSubmit}>{renderStep()}</form>
		</div>
	);
};

export default MultiStepForm;
