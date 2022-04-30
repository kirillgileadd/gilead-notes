import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { alpha } from '@mui/material/styles';
import { useCurrentCategory } from '../hooks/useCurrentCategory';

export const Category = styled(Typography)(({ theme }) => ({
  padding: '5px 15px',
  borderRadius: '20px',
}));

const TaskPaper = styled(Box)({
  padding: '8px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '200px',
  backgroundColor: '#fff'
});

const TaskInner = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: '8px'
});

const TaskText = styled(Typography)({
  display: 'block',
  maxHeight: '100px',
  textOverflow: 'ellipsis',
  wordWrap: 'break-word',
  overflow: 'hidden',
  width: '100%'
});

const TaskButton = styled(Button)({
  borderRadius: '20px',
  textTransform: 'none',
  border: 'none',
  '&:hover': {
    border: 'none',
  }
})

const Task = ({ title, id, text, category, categoryList, deleteTask, listId }) => {
  const currentCategory = useCurrentCategory(category, categoryList)

  const deleteCurrentTask = () => {
    deleteTask(id, listId);
  };

  return (
    <TaskPaper>
      <TaskInner>
        <Typography variant='subtitle1' noWrap>
          {title || 'Untitled'}
        </Typography>
        {currentCategory && <Category
          color={currentCategory.color}
          backgroundColor={alpha(currentCategory.color, 0.1)}>
          {currentCategory.name}
        </Category>}
      </TaskInner>
      <TaskText
        variant={'body2'}
        color='secondary.main'
      >
        {text}
      </TaskText>
      <Box sx={{ alignSelf: 'flex-end' }}>
        <IconButton
          onClick={deleteCurrentTask}
          size={'small'}
          variant={'outlined'}
          sx={{ mr: 1, color: 'primary.main' }}
        >
          <DeleteOutlineOutlinedIcon fontSize={'small'} />
        </IconButton>
        <TaskButton
          component={Link}
          to={`/${id}`}
          sx={{ }}
          variant={'outlined'}
        >
          Details
        </TaskButton>
      </Box>
    </TaskPaper>
  );
};

export default Task;