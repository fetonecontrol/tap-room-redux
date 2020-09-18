import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBottleForm (props) {
  const { bottle } = props;

  function handleEditBottleFormSubmission(event) {
    event.preventDefault();
    props.onEditBottle({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: bottle.id});
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