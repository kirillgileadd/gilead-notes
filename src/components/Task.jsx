import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../theme/theme';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { alpha } from '@mui/material/styles';

export const Catygory = styled(Typography)(({ theme }) => ({
  padding: '5px 15px',
  borderRadius: '20px',
}));

const Task = ({ title, id, text, category, categoryList, deleteTask, listId }) => {
  let currentCategory = categoryList.find((cat) => cat.name === category)

  const deleteCurrentTask = () => {
      deleteTask(id, listId);
  }

  return (
    <Paper sx={{ p: 1, borderRadius: '20px', display: 'flex', flexDirection: 'column', maxHeight: '200px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant={'subtitle1'}>
          {title || 'Untitled'}
        </Typography>
        {
          currentCategory && <Catygory color={currentCategory?.color} backgroundColor={alpha(currentCategory?.color, 0.1)}>
          {currentCategory?.name}
          </Catygory>
        }

      </Box>
      <Typography sx={{ display: 'block', maxHeight: '100px', textOverflow: 'ellipsis', wordWrap: 'break-word', overflow: 'hidden', width: '100%' }} variant={'body2'}
                  color='secondary.main'>
        {text}
      </Typography>
      <div style={{alignSelf: 'flex-end'}}>
        <IconButton onClick={deleteCurrentTask} size={'small'} variant={'outlined'} sx={{mr: 1, color: 'primary.main'}}>
          <DeleteOutlineOutlinedIcon fontSize={'small'}/>
        </IconButton>
        <Link style={{textDecoration: 'none'}} to={`/${id}`}>
          <Button sx={{borderRadius: '20px', textTransform: 'none' }} variant={'outlined'}>Details</Button>
        </Link>
      </div>
    </Paper>
  );
};

export default Task;