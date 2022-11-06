import { useSelector, useDispatch } from 'react-redux';
import { toggleCartState } from '../../store/cart/cart.actions';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(toggleCartState(!isCartOpen));
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
