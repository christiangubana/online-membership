import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router";
import useLocalStorage from '../useLocalStorage'

const Register = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState(useLocalStorage);

  const checkForValidation = (data) => {
    let errors = {};

    if (!data.fullName) {
      errors.fullName = "First Name is required.";
    } else if (data.fullName.length < 5) {
      errors.fullName = "First name cannot be short";
    }

    if (!data.professional) {
      errors.professional = "Professional is required.";
    } else if (!/^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/g.test(data.professional)) {
      errors.professional = "Invalid professional type: must be plain text";
    }

    if (!data.telephone) {
      errors.telephone = "Telephone is required.";
    }

    if (!data.date) {
      errors.date = "Date of Birth is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    if (!data.confirm) {
      errors.confirm = "Please confirm password";
    } else if (data.confirm !== data.password) {
      errors.confirm = "Password don't match";
    }

    if (!data.gender) {
      errors.gender = "Gender is required";
    }
    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const gender = [{ name: "Male" }, { name: "Female" }, {name: 'Other'}];

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(formData));
  }, [formData]);

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error); // React Final Form provides your field state for you in the meta prop.
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => {setShowMessage(false); navigate('/landing') }} /></div>;
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="user-form">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under username <b>{formData.email}</b>
          </p>
        </div>
      </Dialog>

      <div className="flex justify-content-center px-4 pb-8 mb-4">
        <div className="card">
          <h1 className="title text-4xl text-center">Liminil</h1>
          <h5 className="text-center">Register your details to a list</h5>
          <p className="text-center">
            Or{" "}
            <span className="text-orange-700">
              <a href="/login">already have an account?</a>
            </span>
          </p>
          <Form
            onSubmit={onSubmit} // This `Form` manages my form state, and handleSubmit functionality to be passed to <form> element, via render props.
            initialValues={{
              useLocalStorage
            }}
            validate={checkForValidation}
            render={({ handleSubmit, form, values }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                {/* The `Field` manages all the state for a particular field and provides input callbacks (e.g. onBlur, onChange, and onFocus) as well as the value of the form */}
                <Field
                  name="fullName"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="fullName"
                          {...input} // React Final Form provides onChangeEvent func for you in the `input` prop.
                          autoFocus
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="fullName"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Full Name
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
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
                          header={passwordHeader}
                          footer={passwordFooter}
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
                <Field
                  name="confirm"
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
                          header={passwordHeader}
                          footer={passwordFooter}
                        />
                        <label
                          htmlFor="confirm"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Confirm password
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="professional"
                  type="text"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="professional"
                          {...input}
                          autoFocus
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="professional"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Professional
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="telephone"
                  type="number"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="telephone"
                          {...input}
                          placeholder="(212)456-7890"
                          autoFocus
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="telephone"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Telephone
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="gender"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Dropdown
                          id="gender"
                          {...input}
                          options={gender}
                          optionLabel="name"
                        />
                        <label htmlFor="gender">Gender</label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="date"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Calendar
                          id="date"
                          {...input}
                          dateFormat="dd/mm/yy"
                          mask="99/99/9999"
                          showIcon
                        />
                        <label htmlFor="date">Birthday</label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="accept"
                  type="checkbox"
                  render={({ input, meta }) => (
                    <div className="field-checkbox">
                      <Checkbox
                        inputId="accept"
                        {...input}
                        className={classNames({
                          "p-invalid": isFormFieldValid(meta),
                        })}
                      />
                      <label
                        htmlFor="accept"
                        className={classNames({
                          "p-error": isFormFieldValid(meta),
                        })}
                      >
                        I agree to the terms and conditions of Liminil.
                      </label>
                    </div>
                  )}
                />
                <Button type="submit" label="Submit" className="mt-2" />
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
