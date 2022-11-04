import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
