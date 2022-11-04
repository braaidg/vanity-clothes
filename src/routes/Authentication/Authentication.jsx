import SignUpForm from '../../components/SIgnUp/SignUpForm';
import SignInForm from '../../components/SignIn/SignInForm';

import './Authentication.styles.scss';

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
