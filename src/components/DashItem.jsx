import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction, deleteTaskThunk, postTaskThunk } from '../redux/actions/boards';
import AddNewTask from './AddNewTask';
import LoadingBoards from './LoadingBoards';
import { Draggable } from 'react-beautiful-dnd';

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: '15px',
  borderRadius: '20px 20px 0px 0px'
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(44, 154, 132, 0.12)',
  fontSize: '30px',
  borderRadius: '20px',
  padding: '5px'
}));


const DashItem = ({ title, board, categoryList, totalCount }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const { loading } = useSelector(({ boards }) => boards);
  const listId = board.id;

  const addTask = (newTask) => {
    dispatch(postTaskThunk(newTask, listId));
    setOpenModal(false);
  };

  const deleteTask = (id, listId) => {
    if (window.confirm('Do you really want to delete note?')) {
      dispatch(deleteTaskThunk(id, listId));
    }
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <CustomPaper sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '12px', alignItems: 'center' }}>
          <Typography variant={'h6'} sx={{ fontWeight: '500' }}>
            {board.title}
          </Typography>
          <Typography sx={{ backgroundColor: 'rgba(44, 154, 132, 0.12)', p: '3px 8px', borderRadius: '7px' }}
                      color={'primary'}>
            {
              board.tasks.length
            }
          </Typography>
        </Box>
        <CustomButton fullWidth onClick={handleOpenModal}><Typography variant={'h5'}
                                                                      sx={{ fontSize: '30px' }}>+</Typography></CustomButton>
        {
          !loading ? board.tasks.map((obj, index) => {
            return (
              <Draggable key={obj.id} draggableId={String(obj.id)} index={index}>
                {(provided, snapshot) => {
                  return (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{mb: 1, mt: 1}}
                    >
                      <Task

                        {...obj}
                        categoryList={categoryList}
                        deleteTask={deleteTask}
                        style={{
                          ...provided.draggableProps.style
                        }}
                      />
                    </Box>
                  );
                }}
              </Draggable>
            );
          }) : <LoadingBoards />
        }
      </CustomPaper>
      <AddNewTask listId={listId} totalCount={totalCount} setOpenModal={setOpenModal} open={openModal} addTask={addTask}
                  handleCloseModal={handleCloseModal} />
    </>
  );
};

export default DashItem;