import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Task from './Task';
import { theme } from '../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction } from '../redux/actions/boards';
import AddModal from './AddModal';
import LoadingBoards from './LoadingBoards';

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: '15px',
  borderRadius: '20px 20px 0px 0px'
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  fontSize: '30px',
  borderRadius: '20px',
  padding: '5px'
}));


const DashItem = ({ title, board }) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = React.useState(false);
  const loading = useSelector(({boards}) => boards.loading)

  const addTask = (newTask) => {
    const listId = board.id
    dispatch(addTaskAction(newTask, listId))
    setOpenModal(false)
  }

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Grid item xs={4} >
      <CustomPaper sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '12px', alignItems: 'center' }}>
          <Typography variant={'h6'} sx={{ fontWeight: '500' }}>
            {board.title}
          </Typography>
          <Typography sx={{backgroundColor: theme.palette.primary.dark, p: "3px 8px", borderRadius: '7px'}} color={'primary'}>
            {
              board.tasks.length
            }
          </Typography>
        </Box>
        <CustomButton fullWidth onClick={handleOpenModal}><Typography variant={'h5'} sx={{ fontSize: '30px' }}>+</Typography></CustomButton>
        {
          loading ?
           board.tasks.map((obj) => <Task {...obj}/>) : <LoadingBoards/>
        }
      </CustomPaper>
      <AddModal setOpenModal={setOpenModal} open={openModal} addTask={addTask} handleCloseModal={handleCloseModal}/>
    </Grid>
  );
};

export default DashItem;