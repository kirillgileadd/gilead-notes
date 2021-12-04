import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

const LoadingBoards = () => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <CircularProgress color='primary' />
    </Grid>
  );
};

export default LoadingBoards;