import { useState } from 'react';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../formInput/FormInput';

import './SignInForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error.code);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button>Sign in</Button>
          <Button
            button
            buttonStyle={BUTTON_TYPE_CLASSES.google}
            clickHandler={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
