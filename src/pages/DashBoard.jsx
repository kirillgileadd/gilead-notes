import React, { useEffect, useState } from 'react';
import DashItem from '../components/DashItem';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, setFetching } from '../redux/actions/boards';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const dashItemsNames = ['To do', 'In Progress', 'Completed'];

const onDragEnd = (result, columns, setColumns) => {
  if(!result.destination) return;
  const { source, destination} = result

  const sourceColumn = columns[source.droppableId];
  const destColumn = columns[destination.droppableId];
  const sourceItems = [...sourceColumn.items];
  const destItems = [...destColumn.items];
  const [removed] = sourceItems.splice(source.index, 1);
  destItems.splice(destination.index, 0, removed);
  setColumns({
    ...columns,
    [source.droppableId]: {
      ...sourceColumn,
      items: sourceItems
    }
  });
}

const DashBoard = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector(({ categories }) => categories);
  const { fetching } = useSelector(({ boards }) => boards);
  const { currentPage } = useSelector(({ boards }) => boards);
  const { cards } = useSelector(({ boards }) => boards);
  const { totalCount } = useSelector(({ boards }) => boards);
  const { currentCategory } = useSelector(({ filter }) => filter);
  const data = useSelector(({ boards }) => boards);
  const currentCategoryItem = categoryList.find((item) => item.id === currentCategory);

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
        <DragDropContext onDragEnd={result => console.log(result)}>
          {
            data.listIds.map((listId, index) => {
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
            })
          }
        </DragDropContext>
      </Grid>
    </Box>
  );
};

export default DashBoard;