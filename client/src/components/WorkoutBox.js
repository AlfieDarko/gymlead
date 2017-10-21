import React from "react";
import WorkoutContent from "./WorkoutContent";

const WorkoutBox = () => (
	<div className="card">
		<header className="card-header">
			<p className="card-header-title">Workouts</p>
		</header>

		<div className="card-content">
			<div className="content">
				<nav
					className="breadcrumb is-small has-dot-separator"
					aria-label="breadcrumbs"
				>
					<ul>
						<li>
							<a href="#">Core</a>
						</li>
						<li>
							<a href="#">Chest</a>
						</li>
						<li>
							<a href="#">Back</a>
						</li>
						<li>
							<a href="#">Arms</a>
						</li>
						<li>
							<a href="#">Shoulders</a>
						</li>
						<li>
							<a href="#">Legs</a>
						</li>

						<li className="is-active">
							<a href="#" aria-current="page">
								All
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="card-content">
				<WorkoutContent />
			</div>
		</div>
	</div>
);

export default WorkoutBox;
