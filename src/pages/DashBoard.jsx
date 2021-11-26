import React from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';

const dashItemsNames = ['To do', 'In Progress', 'Completed']
const fakeTasks = [
  {
    id: 0,
    title: 'First Task',
    text: 'body2body2body2body2body2',
    category: 'test'
  },
  {
    id: 1,
    title: 'Second Task',
    text: 'body2body2body2body2body2',
    category: 'test'
  },
  {
    id: 2,
    title: 'Third Task',
    text: 'body2body2body2body2body2',
    category: 'test'
  }
];


const DashBoard = () => {
  return (
    <Box sx={{textAlign: 'left', p: 4, pb: 0}}>
      <Typography variant={'h5'} sx={{mb: 4, fontWeight: '500'}}>Projects</Typography>
      <Grid container spacing={3} sx={{display:'flex', height: "100vh"}}>
        <DashItem name={'To do'}/>
        <DashItem name={'In Progress'}/>
        <DashItem name={'Completed'}/>
      </Grid>
    </Box>
  );
};

export default DashBoard;