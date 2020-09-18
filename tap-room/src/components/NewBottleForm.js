import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBottleForm(props){
  function handleNewBottleFormSubmission(event) {
    event.preventDefault();
    props.onNewBottleCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      price: event.target.price.value,
      origin: event.target.origin.value,
      tastingNotes: event.target.tastingNotes.value,
      count: 300,
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewBottleFormSubmission}
      buttonText="Add!" />
    </React.Fragment>
  );
}

NewBottleForm.propTypes = {
  onNewBottleCreation: PropTypes.func
};

export default NewBottleForm;