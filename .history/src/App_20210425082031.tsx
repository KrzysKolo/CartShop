import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
import { request } from './helpers/request';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       Shop
      </header>
    </div>
  );
}

export default App;
