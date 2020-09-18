import React from 'react';
import NewBottleForm from './NewBottleForm';
import BottleList from './BottleList';
import BottleDetail from './BottleDetail';
import EditBottleForm from './EditBottleForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
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
    this.setState({
      editing: false,
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
    if (this.state.editing ) {      
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
        buttonText = "Add New Bottle!"
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
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BottleControl = connect(mapStateToProps)(BottleControl);

export default BottleControl;
                                                // handleSellingShot = () => {
                                                //   const bottleToSell2 = this.state.masterBottleList
                                                //   .filter(bottle => bottle.id === this.state.selectedBottle.id)
                                                //   const subtractCount = this.state.selectedBottle.count -12;
                                                //   const bottleToAdd = {
                                                //     name: this.state.selectedBottle.name, 
                                                //     type: this.state.selectedBottle.type,
                                                //     price: this.state.selectedBottle.price,
                                                //     origin: this.state.selectedBottle.origin,
                                                //     tastingNotes: this.state.selectedBottle.tastingNotes,
                                                //     id: this.state.selectedBottle.id,
                                                //     count: subtractCount };
                                                //   const editedMasterBottleList = this.state.masterBottleList
                                                //   .filter(bottle => bottle.id !== this.state.selectedBottle.id)
                                                //   .concat(bottleToAdd);
                                                //   this.setState({
                                                //     masterBottleList: editedMasterBottleList,
                                                //     editing: false,
                                                //     selectedBottle: null
                                                //   });
                                                // }
                                                