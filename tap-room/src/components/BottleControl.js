import React from "react";
import NewBottleForm from "./NewBottleForm";
import BottleList from "./BottleList";
import BottleDetail from "./BottleDetail";
import EditBottleForm from './EditBottleForm';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class BottleControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedBottle: null,
      editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedBottle != null) {
      this.setState({
        selectedBottle: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }


  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
  }

  handleChangingSelectedBottle = (id) => {
    const selectedBottle = this.props.masterBottleList.filter(bottle => bottle.id === id)[0];
    const { dispatch } = this.props;
    const action = a.selectedBottle(selectedBottle);
    dispatch(action);
  }

  handleAddingNewBottleToList = (newBottle) => {
    const newMasterBottleList = this.props.masterBottleList.concat(newBottle);
    this.setState({
      masterBottleList: newMasterBottleList,
      formVisibleOnPage: false
    });
  }

  handleDeletingBottle = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBottle(id);
    dispatch(action);
    this.setState({selectedBottle: null});
  }

  handleEditingBottleInList = (bottleToEdit) => {
    const editedMasterBottleList = this.props.masterBottleList
      .filter(bottle => bottle.id !== this.props.selectedBottle.id)
      .concat(bottleToEdit);
    this.setState({
      masterBottleList: editedMasterBottleList,
      editing: false,
      selectedBottle: null
    });
  }

  handleSellingShot = () => {
    const bottleToSell2 = this.state.masterBottleList
    .filter(bottle => bottle.id === this.state.selectedBottle.id)
    const subtractCount = this.state.selectedBottle.count -12;
    const bottleToAdd = {
      name: this.state.selectedBottle.name, 
      type: this.state.selectedBottle.type,
      price: this.state.selectedBottle.price,
      origin: this.state.selectedBottle.origin,
      tastingNotes: this.state.selectedBottle.tastingNotes,
      id: this.state.selectedBottle.id,
      count: subtractCount };
    const editedMasterBottleList = this.state.masterBottleList
    .filter(bottle => bottle.id !== this.state.selectedBottle.id)
    .concat(bottleToAdd);
    this.setState({
      masterBottleList: editedMasterBottleList,
      editing: false,
      selectedBottle: null
    });
  }
  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing ) {      
      currentlyVisibleState = 
      <EditBottleForm
      bottle = {this.props.selectedBottle}
      onEditBottle = {this.handleEditingBottleInList} />
      buttonText = "Return to Bottle List";
    } else if (this.props.selectedBottle != null) {
      console.log(this.props.selectedBottle);
      currentlyVisibleState = <BottleDetail 
      bottle = {this.props.selectedBottle} 
        onClickingSell = {this.handleSellingShot}
        onClickingDelete = {this.handleDeletingBottle} 
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Bottle List";
    } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewBottleForm onNewBottleCreation={this.handleAddingNewBottleToList} />
        buttonText = "Return to Bottle List";
    } else {
        currentlyVisibleState = 
          <BottleList 
            bottleList={this.props.masterBottleList} 
            onBottleSelection={this.handleChangingSelectedBottle} />
        buttonText = "Add Bottle"
    }
    return (
      <div style={{ 
        textAlign: 'center',
        padding: '20px',
        }}>
      <React.Fragment>
          {currentlyVisibleState}
          <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
        </React.Fragment>
      </div>
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
    selectedBottle: state.selectedBottle,
    editing: state.editing,

  }
}

BottleControl = connect(mapStateToProps)(BottleControl);

export default BottleControl;