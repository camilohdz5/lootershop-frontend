// Vendors
import * as Yup from 'yup';

// Interfaces
import { loginForm } from '../utils/interfaces';

// Utils
import { INVALID_EMAIL_ERROR, REQUIRED_FIELD_ERROR } from '../utils/yupValidationMessages';
import { signIn } from '../utils/api';

const useSignIn = () => {
  const VALIDATION_SCHEMA = Yup.object().shape({
    email: Yup.string().email(INVALID_EMAIL_ERROR).required(REQUIRED_FIELD_ERROR),
    password: Yup.string().required(REQUIRED_FIELD_ERROR),
  });

  const INITIAL_VALUES: loginForm = {
    email: '',
    password: '',
  };

  const submitForm = async ({ email, password }: loginForm) => signIn(email, password);

  return { VALIDATION_SCHEMA, INITIAL_VALUES, submitForm };
};

export default useSignIn;
