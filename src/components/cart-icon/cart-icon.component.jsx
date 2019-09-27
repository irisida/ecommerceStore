import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

//import './cart-icon.styles.scss';
import {
  CartIconStyle,
  ItemCountStyle,
  ShoppingIconStyle,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconStyle className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIconStyle>{ShoppingIconSVG}</ShoppingIconStyle>
      <ItemCountStyle className="item-count">{itemCount}</ItemCountStyle>
    </CartIconStyle>
  );
};

/* uses the memoization method by using the selector
 * file which uses reselect and createSelector method
 */
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
