import React from "react";
import PropTypes from "prop-types";

function Bottle(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBottleClicked(props.id)}>
        <p>{props.name}</p>
        <p>{props.type}</p>
        <p>{props.price}</p>
        <p>{props.origin}</p>
        <p>{props.tastingNotes}</p>
        <p>{props.count}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Bottle.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  origin: PropTypes.string,
  tastingNotes: PropTypes.string,
  count: PropTypes.number,
  id: PropTypes.string,
  whenBottleClicked: PropTypes.func
};

export default Bottle;