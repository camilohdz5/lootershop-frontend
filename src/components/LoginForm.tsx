// Vendors
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

// Custom Hooks
import { useSignIn } from '../hooks';

const LoginForm = (): JSX.Element => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { INITIAL_VALUES, VALIDATION_SCHEMA, submitForm } = useSignIn();

  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={(values) => {
          submitForm(values)
            .then((res) => {
              console.log('response', res);
              setSubmitting(false);
            })
            .catch((err) => console.error('error: ', err));
        }}>
        <Form>
          <Field name="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <button disabled={submitting} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
