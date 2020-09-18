import * as c from './../actions/ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const deleteBottle = id => ({
  type: c.DELETE_BOTTLE,
  id
});

export const addBottle = (bottle) => {
  const { names, location, issue, id } = bottle;
  return {
    type: c.ADD_BOTTLE,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}