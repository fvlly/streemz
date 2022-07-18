import React from "react";
import { reduxForm, Field } from "redux-form";

const renderInput = () => {
  return (
    <div>
      <input />
    </div>
  );
};

const StreamCreate = () => {
  return (
    <form>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </form>
  );
};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
