import React, { useEffect, useState } from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, setFetching } from '../redux/actions/boards';

const dashItemsNames = ['To do', 'In Progress', 'Completed'];

const DashBoard = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector(({ categories }) => categories);
  const { fetching } = useSelector(({ boards }) => boards);
  const { currentPage } = useSelector(({ boards }) => boards);
  const { cards } = useSelector(({ boards }) => boards);
  const { totalCount } = useSelector(({ boards }) => boards);
  const {currentCategory} = useSelector(({filter}) => filter)
  const data = useSelector(({ boards }) => boards);
  const currentCategoryItem = categoryList.find((item) => item.id === currentCategory)

  useEffect(() => {
    if (fetching) {
      dispatch(fetchBoards(currentPage, currentCategoryItem));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [cards, totalCount]);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 60 && cards.length < totalCount) {
      console.log('asd');
      dispatch(setFetching(true));
    }
  };

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