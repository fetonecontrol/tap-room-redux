// import React from "react";
// import PropTypes from "prop-types";
// import ReusableButton from "./JustAbutton";

// function SellShot(props){
//   const {bottle} = props;
//   const subtract = bottle.count -1;
//   function handlesellShotFormSubmission(event){
//     event.preventDefault();
//     props.onEditBottle({
//       count : subtract,
//       id: bottle.id});
//   }

//   return (
//     <React.Fragment>
//       <ReusableButton
//         formSubmissionHandler={handlesellShotFormSubmission}
//         buttonText="Sell Shot" />
//     </React.Fragment>
//   );
// }
// SellShot.propTypes = {
//   onSellShot: PropTypes.func
// };

// export default SellShot;
