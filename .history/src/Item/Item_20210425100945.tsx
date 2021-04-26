import React from 'react';
import { Button } from '@material-ui/core';

import { CartItemType } from './../App';
import { Wrapper } from './Item.styles';

interface Props {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType);

}

const Item = () => {
  return (
    <div>

    </div>
  )
}

export default Item;
