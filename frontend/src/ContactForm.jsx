import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required, email, maxLength } from './validators';
import Textfield from './Textfield';

export const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h1>Contact Form</h1>
    <Field
      name="name"
      label="Name"
      component={Textfield}
      validate={required}
    />
    <Field
      name="email"
      label="E-Mail"
      component={Textfield}
      validate={[required, email]}
    />
    <Field
      name="subject"
      label="Subject"
      component={Textfield}
      validate={[required, maxLength(10)]}
    />
    <Field
      name="message"
      label="Message"
      component={Textfield}
      multiLine
      validate={required}
    />
    <div className="action">
      <div className="checkbox-wrapper">
        <Field
          name="newsletter"
          id="newsletter"
          component="input"
          type="checkbox"
          className="checkbox"
        />

        <label htmlFor="newsletter">
          Subscribe to newsletter
        </label>
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm(
  {
    form: 'contact',
    onSubmit: console.log,
  },
)(ContactForm);
