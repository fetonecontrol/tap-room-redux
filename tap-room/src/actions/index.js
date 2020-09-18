import * as c from './../actions/ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const toggleEditing = () => ({
  type: c.TOGGLE_EDITING,
});

export const deleteBottle = id => ({
  type: c.DELETE_BOTTLE,
  id
});

export const selectedBottle = bottle => ({
  type: c.SELECTED_BOTTLE,
  bottle
})

export const addBottle = (bottle) => {
  const { name, kind, price, origin, id } = bottle;
  return {
    type: c.ADD_BOTTLE,
    name: name,
    kind: kind,
    price: price,
    origin: origin,
    id: id
  }
}