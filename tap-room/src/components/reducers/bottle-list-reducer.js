import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, type, price, origin, tastingNotes, count, id } = action;
  switch (action.type) {
  case c.ADD_TICKET:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        type: type,
        price: price,
        origin: origin,
        tastingNotes: tastingNotes,
        count: count,
        id: id
      }
    });
  case c.DELETE_TICKET:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};