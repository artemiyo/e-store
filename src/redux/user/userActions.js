import { userTypes } from "./userTypes";

export const setCurrentUser = user => dispatch => {
  dispatch({
    type: userTypes.SET_CURRENT_USER,
    payload: user
  });
};
