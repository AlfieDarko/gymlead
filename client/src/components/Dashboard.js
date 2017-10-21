import React from "react";
import WorkoutBox from "./WorkoutBox";
const Dashboard = () => (
	<div>
		<div className="container is-fluid">
			<div className="notification">
				This container is <strong>fullwidth</strong> <em>until</em> the{" "}
				<code>$fullhd</code> breakpoint.
			</div>
			<WorkoutBox />
		</div>
	</div>
);

export default Dashboard;
