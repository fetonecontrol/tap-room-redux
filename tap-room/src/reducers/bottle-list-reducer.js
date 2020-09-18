import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, kind, price, origin, id } = action;
  switch (action.type) {
  case c.ADD_BOTTLE:
    return Object.assign({}, state, {
      [id]: {
        names: name,
        kind: kind,
        price: price,
        origin: origin,
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