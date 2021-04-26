import React from 'react';
import cartItem from '../CartItem/CartItem';

import { Wrapper } from './Cart.styles';

import { CartItemType } from '../App';

interface Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItem, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
    </Wrapper>
  )
}

export default Cart;
