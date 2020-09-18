import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  case c.ADD_BOTTLE:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  case c.DELETE_BOTTLE:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};