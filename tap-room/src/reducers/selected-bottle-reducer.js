import * as c from '../actions/ActionTypes';

export default (state, action) => {
  switch (action.type) {
  case c.SELECTED_BOTTLE:
    return state;
  default:
    return null;
  }
};