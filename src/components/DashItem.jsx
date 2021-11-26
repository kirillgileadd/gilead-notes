import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../theme/theme';
import TaskList from './TaskList';
import Task from './Task';

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


const DashItem = ({ name }) => {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')


  return (
    <Grid item xs={4} sx={{ height: '100%' }}>
      <CustomPaper sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '12px' }}>
          <Typography sx={{ fontWeight: '500' }}>
            {name}
          </Typography>
          <span>
            2
          </span>
        </Box>
        <CustomButton fullWidth><Typography variant={'h5'} sx={{ fontSize: '30px' }}>+</Typography></CustomButton>
        {
          tasks.map((obj) => <Task {...obj}/>)
        }
      </CustomPaper>
    </Grid>
  );
};

export default DashItem;