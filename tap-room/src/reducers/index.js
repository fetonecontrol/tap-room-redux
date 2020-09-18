import formVisibleReducer from './form-visible-reducer';
import bottleListReducer from './bottle-list-reducer';
import selectedBottleReducer from './selected-bottle-reducer';
import editingTrueReducer from './editing-true-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({

  formVisibleOnPage: formVisibleReducer,
  editing: editingTrueReducer,
  selectedBottle: selectedBottleReducer,
  masterBottletList: bottleListReducer
  
});

export default rootReducer;