import React from "react";
import Bottle from "./Bottle";
import PropTypes from "prop-types";

function BottleList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.bottleList).map((bottle) => {
        return <Bottle
        whenBottleClicked = { props.onBottleSelection }
        name={bottle.name}
        type={bottle.type}
        price={bottle.price}
        origin={bottle.origin}
        tastingNotes={bottle.tastingNotes}
        count={bottle.count}
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