import * as actionTypes from "./ActionTypes";

export const comments = (
  state = { isLoading: true, errMess: null, comments: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    default:
      return state;
  }
};
