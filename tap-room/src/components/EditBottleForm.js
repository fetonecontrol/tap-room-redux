import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBottleForm (props) {
  const { bottle } = props;
  console.log(bottle);

  function handleEditBottleFormSubmission(event) {
    event.preventDefault();
    props.onEditBottle({
      name: event.target.name.value,
      kind: event.target.kind.value,
      price: event.target.price.value,
      origin: event.target.origin.value,
      id: bottle.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditBottleFormSubmission}
        buttonText="Update Bottle" />
    </React.Fragment>
  );
}

EditBottleForm.propTypes = {
  onEditBottle: PropTypes.func
};

export default EditBottleForm;