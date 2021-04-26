import React from 'react';
import Button from '@material-ui/core/Button';

import { CartItemType } from '../App';

import { Wrapper } from './CartItem.styles';
interface Props = {
  item: CartItemType;
};

const CartItem: React.FC = () => {
  return (
    <div>
      Cart Item
    </div>
  )
}

export default CartItem;
