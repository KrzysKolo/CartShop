import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';


export interface CartItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const request = async ():Promise<CartItemType> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType>();
  return (
    <div className="App">
      <header className="App-header">
       Shop
      </header>
    </div>
  );
}

export default App;
