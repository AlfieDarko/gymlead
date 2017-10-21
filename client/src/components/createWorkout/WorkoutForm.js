import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import WorkoutField from "./WorkoutField";
import formFields from "./formFields";

class WorkoutForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={WorkoutField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<div class="column is-half is-offset-one-quarter">
					<div className="field">
						<form
							onSubmit={this.props.handleSubmit(this.props.onWorkoutSubmit)}
						>
							{this.renderFields()}
							<Link to="/addworkout" className="">
								<a className="button is-light">Cancel</a>
							</Link>
							<br />

							<a className="button is-light" type="submit">
								<i className="material-icons right">Done</i>
							</a>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default reduxForm({
	form: "workoutForm"
})(WorkoutForm);
