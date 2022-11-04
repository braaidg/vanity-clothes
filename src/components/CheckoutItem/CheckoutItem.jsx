import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import './CheckoutItem.styles.scss';

function CheckoutItem({ item }) {
  const { name, imageUrl, price, quantity } = item;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);

  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button type="button" className="arrow" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button type="button" className="arrow" onClick={addItemHandler}>
          &#10095;
        </button>
      </span>
      <span className="price">{price}</span>
      <button
        type="button"
        className="remove-button"
        onClick={clearItemHandler}
      >
        &#10005;
      </button>
    </div>
  );
}

export default CheckoutItem;
