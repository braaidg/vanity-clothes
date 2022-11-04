import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
} from './ProductCard.styles';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
