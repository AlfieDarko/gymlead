import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorkouts, deleteWorkout } from "../actions/index";

class WorkoutContent extends Component {
	constructor(props) {
		super(props);

		this.deleteHelper = this.deleteHelper.bind(this);
	}
	componentDidMount() {
		console.log(this.props);
		this.props.fetchWorkouts();
	}
	deleteHelper(workout) {
		this.props.deleteWorkout(workout);
	}

	renderWorkouts() {
		return this.props.workouts.map(workout => {
			return (
				<article key={workout._id} className="media">
					<figure className="media-left">
						<p className="image is-128x128">
							<img src={`${workout.imageURL}`} />
						</p>
					</figure>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{workout.name}</strong>{" "}
								<small>{workout.bodypart}</small>
								<br />
								{workout.description}
							</p>
						</div>
						<nav className="level is-mobile">
							<div className="level-left">
								<a className="level-item">
									<span className="icon is-small">
										<i className="fa fa-pencil-square-o" />
									</span>
								</a>
								<a className="level-item">
									<span className="icon is-small">
										<i className="fa fa-heart" />
									</span>
								</a>
								<a
									className="level-item"
									onClick={() => this.props.deleteWorkout(workout)}
								>
									<span className="icon is-small">
										<i className="fa fa-trash" />
									</span>
								</a>
							</div>
						</nav>
					</div>
					<div className="media-right">
						<button className="delete" />
					</div>
				</article>
			);
		});
	}

	render() {
		return <div>{this.renderWorkouts()}</div>;
	}
}

function mapStateToProps({ workouts }) {
	return {
		workouts
	};
}

// const mapDispatchToProps = dispatch => {
// 	return state;
// };

export default connect(mapStateToProps, {
	fetchWorkouts,
	deleteWorkout
})(WorkoutContent);
