import React from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import DashBoard from '../pages/DashBoard';
import { Route, Routes } from 'react-router-dom';
import Stats from '../pages/Stats';
import DetailTask from '../pages/DetailTask';

const Main = () => {
  return (
    <Grid xs={10} item>
      <Header />
      <Routes>
        <Route path={'/'} element={<DashBoard />} />
        <Route path={'/:id'} element={<DetailTask />} />
        <Route path={'/stats'} element={<Stats />} />
      </Routes>
    </Grid>
  );
};

export default Main;