import React from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import DashBoard from '../pages/DashBoard';

const Main = () => {
  return (
    <Grid xs={9} item>
      <Header />
      <DashBoard />
    </Grid>
  );
};

export default Main;