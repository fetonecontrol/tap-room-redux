import * as c from './../actions/ActionTypes';

export const changeBottle = () => ({
  type: c.CHANGE_BOTTLE,
})

export const toggleEditing = () => ({
  type: c.TOGGLE_EDITING,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}