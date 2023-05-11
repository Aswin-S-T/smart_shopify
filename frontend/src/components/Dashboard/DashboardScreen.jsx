import React from "react";
import CollapsibleTable from "./CollapsibleTable";

function DashboardScreen() {
	return (
		<div className="">
			<div className="row">
				<div className="col-md-4">
					<div className="dashCard p-4">
						<h4>PRODUCT SOLD</h4>
						<h1>100</h1>
					</div>
				</div>
				<div className="col-md-4">
					<div className="dashCard p-4">
						<h4>PRODUCT SOLD</h4>
						<h1>100</h1>
					</div>
				</div>
				<div className="col-md-4">
					<div className="dashCard p-4">
						<h4>PRODUCT SOLD</h4>
						<h1>100</h1>
					</div>
				</div>
			</div>
			<div className="mt-5 w-100">
				<h6>Your customers</h6>
				<CollapsibleTable />
			</div>
		</div>
	);
}

export default DashboardScreen;
