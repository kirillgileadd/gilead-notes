import React, { useEffect } from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, onDrugEndThunk } from '../redux/actions/boards';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useDebounce from '../hooks/useDebounce';


const DashBoard = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector(({ categories }) => categories);
  const { currentPage, totalCount, searchValue } = useSelector(({ boards }) => boards);
  const data = useSelector(({ boards }) => boards);
  const { currentCategory } = useSelector(({ filter }) => filter);

  const currentCategoryItem = categoryList[currentCategory]?.name;
  const debouncedSearchTerm = useDebounce(searchValue, 300);

  const onDragEnd = (result, columns) => {
    if (!result.destination) return;
    dispatch(onDrugEndThunk(result, columns));
  };

  useEffect(() => {
    dispatch(fetchBoards(currentPage, currentCategoryItem, debouncedSearchTerm));
  }, [debouncedSearchTerm, currentCategoryItem]);

  return (
    <Box
      sx={{ p: 4, pb: 0 }}
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