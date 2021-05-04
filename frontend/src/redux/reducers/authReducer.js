import { SET_CURRENT_USER } from '../actions/types';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    default:
      return state;
  }
}