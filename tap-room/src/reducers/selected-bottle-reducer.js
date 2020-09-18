import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.SELECTED_BOTTLE:
    return state;
  default:
    return state;
  }
};