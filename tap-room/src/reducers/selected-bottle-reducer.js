
import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.SELECTED_BOTTLE:
    return Object.assign({}, state, action);
  default:
    return null;
  }
};