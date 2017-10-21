//shows user their form for review
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const WorkoutFormReview = ({ onCancel, formValues, submitWorkout }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div className="field" key={name}>
				<label className="label">{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entry</h5>
			{reviewFields}
			<a className="button">Back</a>
			<button onClick={() => submitWorkout(formValues)}>Add Workout</button>
		</div>
	);
};
function mapStateToProps(state) {
	console.log(state);
	return { formValues: state.form.workoutForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(WorkoutFormReview));
