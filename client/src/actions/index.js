import axios from "axios";
import {
	FETCH_USER,
	FETCH_WORKOUTS,
	DELETE_WORKOUT,
	ADD_WORKOUTS
} from "./types";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchWorkouts = () => async dispatch => {
	const res = await axios.get("api/workouts");

	dispatch({ type: FETCH_WORKOUTS, payload: res.data });
};

export const deleteWorkout = ({ _id }) => async (dispatch, getState) => {
	const res = await axios.delete(`api/workouts/${_id}`);
	dispatch({ type: DELETE_WORKOUT, payload: _id });
};

export const addWorkout = values => async dispatch => {
	const res = await axios.post("api/workouts", values);

	dispatch({ type: FETCH_WORKOUTS, payload: res.data });
};
