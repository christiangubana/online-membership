import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate()

  const checkForValidation = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Please enter your password";
    }
    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    navigate('/landing')
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
    <div className="user-form">
      <div className="flex justify-content-center px-4 pb-8 mb-4">
        <div className="card">
          <h1 className="title text-4xl text-center">Liminil</h1>
          <h5 className="text-center">Login into your account</h5>
          <p className="text-center">
            Or{" "}
            <span className="text-orange-700">
              <a href="/register">don't have an account?</a>
            </span>
          </p>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              email: "",
              password: "",
            }}
            validate={checkForValidation}
            render={({ handleSubmit, form, values }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="email"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Email
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Password
                          id="password"
                          {...input}
                          toggleMask
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="password"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Password
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Button type="submit" label="Login" className="mt-2" />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
