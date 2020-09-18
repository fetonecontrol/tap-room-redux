import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBottleForm (props) {
  const { bottle } = props;

  function handleEditBottleFormSubmission(event) {
    event.preventDefault();
    props.onEditBottle({
      name: event.target.name.value,
      type: event.target.type.value,
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