import * as c from './../actions/ActionTypes';


export const toggleEditing = () => ({
  type: c.TOGGLE_EDITING,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const changeBottle = id => ({
  type: c.CHANGE_BOTTLE,
  id
});

export const deleteBottle = id => ({
  type: c.DELETE_BOTTLE,
  id
});

export const addBottle = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: c.ADD_BOTTLE,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}