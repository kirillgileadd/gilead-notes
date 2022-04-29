import React, { useEffect } from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, onDrugEndThunk } from '../redux/actions/boards';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const DashBoard = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector(({ categories }) => categories);
  const { fetching, currentPage, cards, totalCount  } = useSelector(({ boards }) => boards);
  const data = useSelector(({ boards }) => boards);
  const { currentCategory } = useSelector(({ filter }) => filter);

  const currentCategoryItem = categoryList.find((item) => item.id === currentCategory);

  const onDragEnd = (result, columns) => {
    if(!result.destination) return;
    dispatch(onDrugEndThunk(result, columns))
  }

  useEffect(() => {
    if (fetching) {
      dispatch(fetchBoards(currentPage, currentCategoryItem));
    }
  }, [fetching]);

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return function() {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [cards, totalCount]);
  //
  // const scrollHandler = (e) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 60 && cards.length < totalCount) {
  //     console.log('asd');
  //     dispatch(setFetching(true));
  //   }
  // };

  return (
    <Box
      sx={{p: 4, pb: 0 }}
    >
      <Typography
        variant='h5'
        sx={{ mb: 4, fontWeight: '500' }}
      >
        Notes
      </Typography>

      <Grid container spacing={3} sx={{ minHeight: '100vh' }}>
        <DragDropContext onDragEnd={result => {
          onDragEnd(result, data.items);
        }}>
          {data.listIds.map((listId, index) => {
              const board = data.items[listId];
              return (
                <Droppable key={listId} droppableId={listId}>
                  {(provided, snapshot) => {
                    return (
                      <Grid item xs={4}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <DashItem
                                  totalCount={totalCount}
                                  board={board}
                                  categoryList={categoryList}
                                  index={index} />
                      </Grid>

                    );
                  }}
                </Droppable>
              );
            })}
        </DragDropContext>
      </Grid>
    </Box>
  );
};

export default DashBoard;