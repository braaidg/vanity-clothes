import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button button clickHandler={goToCheckoutHandler}>
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
