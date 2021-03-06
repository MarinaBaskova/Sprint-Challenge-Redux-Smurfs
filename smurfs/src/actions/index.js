/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => {
	return function(dispatch) {
		dispatch({ type: FETCH_DATA_START });

		axios
			.get('http://localhost:3333/smurfs/')
			.then((res) => {
				dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_DATA_FAILURE, payload: err });
			});
	};
};

export const addSmurfs = (newSmurf) => {
	return function(dispatch) {
		dispatch({ type: ADDING_SMURF });
		axios
			.post('http://localhost:3333/smurfs/', newSmurf)
			.then((res) => {
				dispatch({ type: ADD_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_DATA_FAILURE, payload: err });
			});
	};
};

export const deleteSmurf = (id) => {
	console.log('DELETE', id);
	return function(dispatch) {
		dispatch({ type: DELETING_SMURF });
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then((res) => {
				console.log('SERVER RES IS', res);
				dispatch({ type: DELETE_SMURF, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_DATA_FAILURE, payload: err });
			});
	};
};
