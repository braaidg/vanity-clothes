import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';
import FormInput from '../formInput/FormInput';

import './SignUpForm.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords doesnt match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          autoComplete="true"
          value={displayName}
          required
          inputChange={handleChange}
        />

        <FormInput
          label="Email"
          type="emal"
          name="email"
          autoComplete="true"
          value={email}
          required
          inputChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          autoComplete="true"
          name="password"
          value={password}
          required
          inputChange={handleChange}
        />

        <FormInput
          label="Confirm"
          type="password"
          name="confirmPassword"
          autoComplete="false"
          value={confirmPassword}
          required
          inputChange={handleChange}
        />

        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
