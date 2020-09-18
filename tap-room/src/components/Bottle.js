import React from "react";
import PropTypes from "prop-types";

function Bottle(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBottleClicked(props.id)}>
        <p>{props.name}</p>
        <p>{props.kind}</p>
        <p>{props.price}</p>
        <p>{props.origin}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Bottle.propTypes = {
  name: PropTypes.string,
  kind: PropTypes.string,
  price: PropTypes.string,
  origin: PropTypes.string,
  whenBottleClicked: PropTypes.func
};

export default Bottle;