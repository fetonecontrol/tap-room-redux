import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function displayButton(bottle, sell) {
  if (bottle.count > 0){
    const sell1 = sell;
    return ( <Button tyle={{margin: 10}} variant="danger" onClick={() => sell1 }>Sell Shot</Button>);
  } else {
    return (<p>Out of stock</p>);
  }
}
  // it don't work. 
 //Do this in control^^^

function BottleDetail(props){
  const { bottle, onClickingDelete, onClickingSell } = props;
    return (
      <React.Fragment>
        <h1>Bottle Detail</h1>
        <p>{props.name}</p>
        <p>{props.type}</p>
        <p>{props.price}</p>
        <p>{props.origin}</p>
        <p>{props.tastingNotes}</p>
        <p>{props.count}</p>
        {displayButton(bottle, onClickingSell)}
        <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Update Bottle</Button>
        <Button tyle={{margin: 10}} variant="danger" onClick={() => onClickingDelete(bottle.id) }>Remove Bottle</Button>
        <hr/>
      </React.Fragment>
    );
}
BottleDetail.propTypes = {
  bottle: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BottleDetail;