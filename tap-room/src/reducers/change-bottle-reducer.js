import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  const { id } = action;
  switch (action.type) {
  case c.CHANGE_BOTTLE:
    return Object.assign({}, state, {
      [id]: {
        id: id
      }
    });
  default:
    return state;
  }
};