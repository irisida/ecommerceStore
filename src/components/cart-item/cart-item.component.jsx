import React from 'react';

import './cart-item.styles.scss';
import {
  CartItemStyle,
  CartItemImageStyle,
  ItemDetailsStyle,
  NameStyle,
  PriceStyle,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemStyle>
      <CartItemImageStyle src={imageUrl} alt="item" />
      <ItemDetailsStyle>
        <NameStyle>{name}</NameStyle>
        <PriceStyle>
          {quantity} * £{price}
        </PriceStyle>
      </ItemDetailsStyle>
    </CartItemStyle>
  );
};

export default CartItem;
