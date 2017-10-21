import { FETCH_WORKOUTS, DELETE_WORKOUT, ADD_WORKOUT } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WORKOUTS:
			return action.payload || false;

		case DELETE_WORKOUT:
			console.log("state!!", state);
			console.log(action);

			const newState = Object.assign([], state);
			const indexOfWorkoutToDelete = state.findIndex(workout => {
				return state._id == action.payload;
			});
			newState.splice(indexOfWorkoutToDelete, 1);
			return newState;

		default:
			return state;
	}
}
