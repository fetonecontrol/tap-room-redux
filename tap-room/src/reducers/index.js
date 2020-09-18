import formVisibleReducer from './form-visible-reducer';
import bottleListReducer from './bottle-list-reducer';
import changeBottleReducer from './change-bottle-reducer';
import editingTrueReducer from './editing-true-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({

  formVisibleOnPage: formVisibleReducer,
  editing: editingTrueReducer,
  selectedBottle: changeBottleReducer,
  masterBottletList: bottleListReducer
  
});

export default rootReducer;