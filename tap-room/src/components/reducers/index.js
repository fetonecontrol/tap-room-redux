import formVisibleReducer from './form-visible-reducer';
import bottleListReducer from './bottle-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;