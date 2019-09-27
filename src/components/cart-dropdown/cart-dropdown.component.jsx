import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownStyle,
  EmptyMessageStyle,
  CartItemsStyle,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownStyle>
      <CartItemsStyle>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageStyle>The Cart is empty</EmptyMessageStyle>
        )}
      </CartItemsStyle>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </CartDropdownStyle>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

/* no mapDispatchToProps because by not passing a second param
 * to connect the dispatch is automatically passed. Shortcut
 * is used above to pass dispactch in and call it on the
 * onClick event of the custom button
 */

export default withRouter(connect(mapStateToProps)(CartDropdown));
