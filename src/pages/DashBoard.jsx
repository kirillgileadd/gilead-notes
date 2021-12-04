import React, { useEffect, useState } from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from '../redux/actions/boards';
import LoadingBoards from '../components/LoadingBoards';

const dashItemsNames = ['To do', 'In Progress', 'Completed'];
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
  const dispatch = useDispatch()
  const {sortBy, category} = useSelector(({filter}) => filter)
  const data = useSelector(({boards}) => boards)
  const loading = useSelector(({boards}) => boards.loading)

  useEffect(() => {
    dispatch(fetchBoards(sortBy, category))
  }, [dispatch, category, sortBy])


  return (
    <Box sx={{ textAlign: 'left', p: 4, pb: 0 }}>
      <Typography variant={'h5'} sx={{ mb: 4, fontWeight: '500' }}>Projects</Typography>
      <Grid container spacing={3} sx={{ display: 'flex', height: '100vh' }}>
        {
            loading ? data.listIds.map((listId, index) => {
            const board = data.items[listId];
            return <DashItem board={board} key={listId} index={index} />;
          }) : <LoadingBoards/>
        }
      </Grid>
    </Box>
  );
};

export default DashBoard;