// Vendors
import * as Yup from 'yup';

// Interfaces
import { signUpForm } from '../utils/interfaces';

// Utils
import { INVALID_EMAIL_ERROR, REQUIRED_FIELD_ERROR } from '../utils/yupValidationMessages';

const useSignUp = () => {
  const VALIDATION_SCHEMA = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED_FIELD_ERROR),
    lastName: Yup.string().required(REQUIRED_FIELD_ERROR),
    email: Yup.string().email(INVALID_EMAIL_ERROR).required(REQUIRED_FIELD_ERROR),
    username: Yup.string().required(REQUIRED_FIELD_ERROR),
    password: Yup.string().required(REQUIRED_FIELD_ERROR),
    confirmPassword: Yup.string().required(REQUIRED_FIELD_ERROR),
  });

  const INITIAL_VALUES: signUpForm = {
    name: '',
  };

  const submitForm = ({ name }: signUpForm) => true;

  return { VALIDATION_SCHEMA, INITIAL_VALUES, submitForm };
};

export default useSignUp;
