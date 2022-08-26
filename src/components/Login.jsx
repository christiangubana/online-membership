import React from "react";
import { Form, Field } from "react-final-form";

// RMWC Components
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

// Styles

const initialValues = { email: "", password: "" };

const Login = () => (
  <Form initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          render={({ input, meta }) => (
            <InputText
              {...input}
              type="email"
              error={meta.error}
              touched={meta.touched}
              label={"Email"}
            />
          )}
        />
        <Field
          name="password"
          render={({ input, meta }) => (
            <InputText
              {...input}
              type="password"
              error={meta.error}
              touched={meta.touched}
              label={"Pasword"}
            />
          )}
        />
        <Button disabled={submitting} label="Submit" type="submit" unelevated />
      </form>
    )}
  </Form>
);

const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(400);
  window.alert(JSON.stringify(values, 0, 2));
};

export default Login;