import React, { useEffect } from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from '../redux/actions/boards';

const dashItemsNames = ['To do', 'In Progress', 'Completed'];

const DashBoard = () => {
  const dispatch = useDispatch()
  const {categoryList} = useSelector(({categories}) => categories)
  const data = useSelector(({boards}) => boards)

  useEffect(() => {
    dispatch(fetchBoards(1))
  }, [])

  return (
    <Box sx={{ textAlign: 'left', p: 4, pb: 0 }}>
      <Typography variant={'h5'} sx={{ mb: 4, fontWeight: '500' }}>Notes</Typography>
      <Grid container spacing={3} sx={{ display: 'flex', height: '100vh' }}>
        {
          data.listIds.map((listId, index) => {
            const board = data.items[listId];
            return <DashItem board={board} categoryList={categoryList} key={listId} index={index} />;
          })
        }
      </Grid>
    </Box>
  );
};

export default DashBoard;