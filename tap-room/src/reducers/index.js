import formVisibleReducer from './form-visible-reducer';
import editingToggleReducer from './editing-toggle-reducer';
import selectedBottleReducer from './selected-bottle-reducer';
import bottleListReducer from './bottle-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterBottleList: bottleListReducer,
  formVisibleOnPage: formVisibleReducer,
  editing: editingToggleReducer,
  selectedBottle: selectedBottleReducer,
});

export default rootReducer;