import React from "react";
import PropTypes from "prop-types";

function BottleDetail(props){
  const { bottle, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Bottle Detail</h1>
      <h3>{bottle.location} - {bottle.names}</h3>
      <p><em>{bottle.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Bottle</button>
      <button onClick={()=> onClickingDelete(bottle.id) }>Close Bottle</button>
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