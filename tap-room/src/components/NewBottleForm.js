import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBottleForm(props){

  function handleNewBottleFormSubmission(event) {
    event.preventDefault();
    props.onNewBottleCreation({
      names: event.target.names.value, 
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewBottleFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewBottleForm.propTypes = {
  onNewBottleCreation: PropTypes.func
};

export default NewBottleForm;