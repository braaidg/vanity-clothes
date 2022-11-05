import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/vanity-icon.svg';

import { CartContext } from '../../contexts/cartContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import selectCurrentUser from '../../store/user/user.selector';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  BrandContainer,
  Brand,
} from './Navigation.styles';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <BrandContainer to="/">
          <Logo />
          <Brand>VANITY</Brand>
        </BrandContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
