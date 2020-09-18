import { selectedBottle } from '../actions';
import * as c from '../actions/ActionTypes';

export default (state, action) => {
  switch (action.type) {
  case c.SELECTED_BOTTLE:
    return Object.assign({}, state, {
      selectedBottle: state
    });
  default:
    return null;
  }
};