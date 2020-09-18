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
    this.state = {
      selectedBottle: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedBottle != null) {
      const { dispatch } = this.props;
      const action = a.toggleEditing();
      dispatch(action);
      this.setState({
        selectedBottle: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
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
    this.setState({selectedBottle: selectedBottle});
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleEditingBottleInList = (bottleToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBottle(bottleToEdit);
    dispatch(action);

    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2);

    this.setState({
      selectedBottle: null
    });
  }
  
  handleDeletingBottle = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBottle(id);
    dispatch(action);
    this.setState({selectedBottle: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing ) {      
      currentlyVisibleState = <EditBottleForm bottle = {this.state.selectedBottle} onEditBottle = {this.handleEditingBottleInList} />
      buttonText = "Return to Bottle List";
    } else if (this.state.selectedBottle != null) {
      currentlyVisibleState = 
      <BottleDetail 
        bottle = {this.state.selectedBottle} 
        onClickingDelete = {this.handleDeletingBottle} 
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Bottle List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewBottleForm onNewBottleCreation={this.handleAddingNewBottleToList}  />;
      buttonText = "Return to Bottle List";
    } else {
      console.log(this.props.masterBottleList)
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
    editing: state.editing
  }
}

BottleControl = connect(mapStateToProps)(BottleControl);

export default BottleControl;