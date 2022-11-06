import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
} from './ProductCard.styles';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer className="footer">
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        button
        buttonStyle={BUTTON_TYPE_CLASSES.inverted}
        clickHandler={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
