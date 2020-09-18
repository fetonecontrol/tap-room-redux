import React from "react";
import NewBottleForm from "./NewBottleForm";
import BottleList from "./BottleList";
import BottleDetail from "./BottleDetail";
import EditBottleForm from './EditBottleForm';
// import SellShot from './SellShot';
import Button from 'react-bootstrap/Button';

class BottleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBottleList: [],
      selectedBottle: null,
      editing: false
    };
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedBottle = (id) => {
    const selectedBottle = this.state.masterBottleList.filter(bottle => bottle.id === id)[0];
    this.setState({selectedBottle: selectedBottle});
  }

  handleClick = () => {
    if (this.state.selectedBottle != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBottle: null,
        editing: false
        });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewBottleToList = (newBottle) => {
    const newMasterBottleList = this.state.masterBottleList.concat(newBottle);
    this.setState({
      masterBottleList: newMasterBottleList,
      formVisibleOnPage: false
    });
  }

  handleDeletingBottle = (id) => {
    const newMasterBottleList = this.state.masterBottleList.filter(bottle => bottle.id !==id);
    this.setState({
      masterBottleList: newMasterBottleList,
      selectedBottle: null
    });
  }

  handleEditingBottleInList = (bottleToEdit) => {
    const editedMasterBottleList = this.state.masterBottleList
      .filter(bottle => bottle.id !== this.state.selectedBottle.id)
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
    if (this.state.editing ) {      
      currentlyVisibleState = 
      <EditBottleForm
      bottle = {this.state.selectedBottle}
      onEditBottle = {this.handleEditingBottleInList} />
      buttonText = "Return to Bottle List";
    } else if (this.state.selectedBottle != null) {
      currentlyVisibleState = <BottleDetail 
      bottle = {this.state.selectedBottle} 
        onClickingSell = {this.handleSellingShot}
        onClickingDelete = {this.handleDeletingBottle} 
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Bottle List";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewBottleForm onNewBottleCreation={this.handleAddingNewBottleToList} />
        buttonText = "Return to Bottle List";
    } else {
        currentlyVisibleState = 
          <BottleList 
            bottleList={this.state.masterBottleList} 
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

export default BottleControl;