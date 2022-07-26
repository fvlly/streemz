import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form/dist/redux-form";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

import { createStream } from "../../actions";

const StreamCreate = (props) => {
  //helper function
  const onFormSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onFormSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <Button type="submit" colorScheme="blue" mt={4}>
        Submit
      </Button>
    </form>
  );
};

const renderInput = ({ input, label, meta }) => {
  return (
    <FormControl isInvalid={meta.touched && meta.invalid}>
      <FormLabel>{label}</FormLabel>
      <Input {...input} type="text" />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter Title";
  }
  if (!formValues.description) {
    errors.description = "You must enter description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);


export default connect(null, { createStream })(formWrapped);
