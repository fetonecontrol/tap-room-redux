import React from "react";
import PropTypes from "prop-types";

function BottleDetail(props){
  const { bottle, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Bottle Detail</h1>
      <p>{bottle.name}</p>
      <p>{bottle.kind}</p>
      <p>{bottle.price}</p>
      <p>{bottle.origin}</p>
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