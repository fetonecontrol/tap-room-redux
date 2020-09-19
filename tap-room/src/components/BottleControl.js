import React from 'react';
import NewBottleForm from './NewBottleForm';
import BottleList from './BottleList';
import BottleDetail from './BottleDetail';
import EditBottleForm from './EditBottleForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions';

class BottleControl extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedBottle != null) {
      const action2 = a.selectedBottle();
      const action = a.toggleEditing();
      dispatch(action);
      dispatch(action2);
    } else {
      const action3 = a.toggleForm();
      dispatch(action3);
    }
  }

  handleAddingNewBottleToList = (newBottle) => {
    const { dispatch } = this.props;
    const action = a.addBottle(newBottle);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedBottle = (id) => {
    const selectedBottle = this.props.masterBottleList[id];
    const { dispatch } = this.props;
    const action = a.selectedBottle(selectedBottle);
    dispatch(action);
  }
  
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
  }
  
  handleEditingBottleInList = (bottleToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBottle(bottleToEdit);
    const action3 = a.selectedBottle(bottleToEdit);
    const action2 = a.toggleForm();
    const action4 = a.toggleEditing();
    dispatch(action);
    dispatch(action3);
    dispatch(action4);
    dispatch(action2);
  }
  
  handleDeletingBottle = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBottle(id);
    dispatch(action);
    const action2 = a.selectedBottle();
    dispatch(action2);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing ) {    
      console.log(this.props.selectedBottle);  
      currentlyVisibleState = <EditBottleForm
      bottle = {this.props.selectedBottle}
      onEditBottle = {this.handleEditingBottleInList} />
      buttonText = "Return to Bottle List";
    } else if (this.props.selectedBottle != null) {
      currentlyVisibleState = 
      <BottleDetail 
        bottle = {this.props.selectedBottle}
        onClickingDelete = {this.handleDeletingBottle} 
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Bottle List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewBottleForm onNewBottleCreation={this.handleAddingNewBottleToList}  />;
      buttonText = "Return to Bottle List";
    } else {
      currentlyVisibleState = <BottleList 
        bottleList={this.props.masterBottleList} 
        onBottleSelection={this.handleChangingSelectedBottle} />;
        buttonText = "Add Bottle"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

BottleControl.propTypes = {
  masterBottleList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBottleList: state.masterBottleList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedBottle: state.selectedBottle
  }
}

BottleControl = connect(mapStateToProps)(BottleControl);

export default BottleControl;