import React from "react";
import PropTypes from "prop-types";
import Bottle from "./Bottle";

function BottleList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.bottleList).map((bottle) => {
        return <Bottle
          whenBottleClicked = { props.onBottleSelection }
          names={bottle.names}
          location={bottle.location}
          issue={bottle.issue}
          id={bottle.id}
          key={bottle.id}/>
})}
    </React.Fragment>
  );
}

BottleList.propTypes = {
  bottleList: PropTypes.object,
  onBottleSelection: PropTypes.func
};

export default BottleList;