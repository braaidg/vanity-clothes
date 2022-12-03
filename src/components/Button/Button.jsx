import {
  BaseButton,
  GoogleSignInButon,
  InvertedButton,
  ButtonSpinner,
} from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonStyle = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButon,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonStyle]);

function Button({ children, buttonStyle, button, isLoading, clickHandler }) {
  const CustomButton = getButton(buttonStyle);
  return (
    <CustomButton
      disabled={isLoading}
      type={button ? 'button' : 'submit'}
      onClick={clickHandler}
    >
      {isLoading ? 'Cargando' : children}
    </CustomButton>
  );
}

export default Button;
