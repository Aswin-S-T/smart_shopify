import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DashboardScreen from "../../components/Dashboard/DashboardScreen";
import DashboardHeader from "../../components/DashboardHeader";

function Dashboard() {
	return (
		<div>
			<DashboardHeader />
			<Tabs className="vertical-tabs">
				<TabList className="tab-list">
					<Tab>
						<i className="fa fa-home"></i>
						{"  "}Home
					</Tab>
					<Tab>
						<i className="fa fa-folder"></i>
						{"  "}
						Your Products
					</Tab>
					<Tab>
						<i className="fa fa-money"></i>
						{"  "}
						Your Earnings
					</Tab>
				</TabList>

				<TabPanel classID="mt-4">
					<h2 className="">Sales Dashboard</h2>
					<DashboardScreen />
				</TabPanel>
				<TabPanel>
					<h2>Content 2</h2>
					<p>Tab content goes here.</p>
				</TabPanel>
				<TabPanel>
					<h2>Content 3</h2>
					<p>Tab content goes here.</p>
				</TabPanel>
			</Tabs>
		</div>
	);
}

export default Dashboard;
