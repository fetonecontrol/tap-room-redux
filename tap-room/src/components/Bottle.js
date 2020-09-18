import React from "react";
import PropTypes from "prop-types";

function Bottle(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBottleClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Bottle.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenBottleClicked: PropTypes.func
};

export default Bottle;