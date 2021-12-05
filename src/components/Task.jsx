import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { purple } from '@mui/material/colors';
import { theme } from '../theme/theme';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Catygory = styled(Typography)(({ theme }) => ({
  backgroundColor: purple[100],
  padding: '5px 15px',
  borderRadius: '20px',
  color: purple[400]
}));

const Task = ({ title, id, text, category, children }) => {
  return (
    <Paper draggable={true} sx={{ mb: 2, mt: 2, p: 1, borderRadius: '20px', display: 'flex', flexDirection: 'column', maxHeight: '200px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant={'subtitle1'}>
          {title}
        </Typography>
        <Catygory>
          {category}
        </Catygory>
      </Box>
      <Typography sx={{ display: 'block', height: '100%',  maxHeight: '200px', overflow: 'hidden' }} variant={'body2'}
                  color={theme.palette.secondary.main}>
        {text}
      </Typography>
      <div style={{alignSelf: 'flex-end'}}>
        <IconButton size={'small'} variant={'outlined'} sx={{mr: 1, color: `${theme.palette.primary.main}`}}>
          <EditIcon fontSize={'small'}/>
        </IconButton >
        <IconButton  size={'small'} variant={'outlined'} sx={{mr: 1, color: `${theme.palette.primary.main}`}}>
          <DeleteIcon fontSize={'small'}/>
        </IconButton>
        <Link style={{textDecoration: 'none'}} to={`/${id}`}>
          <Button sx={{borderRadius: '20px' }} variant={'outlined'}>Details</Button>
        </Link>
      </div>
    </Paper>
  );
};

export default Task;