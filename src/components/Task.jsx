import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { purple } from '@mui/material/colors';
import { theme } from '../theme/theme';
import { Link } from 'react-router-dom';

const Catygory = styled(Typography)(({ theme }) => ({
  backgroundColor: purple[100],
  padding: '5px 15px',
  borderRadius: '20px',
  color: purple[400]
}));

const Task = ({ title, id, text, category, children }) => {
  return (
    <Paper draggable={true} sx={{ mb: 2, mt: 2, p: 1, borderRadius: '20px', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant={'subtitle1'}>
          {title}
        </Typography>
        <Catygory>
          {category}
        </Catygory>
      </Box>
      <Typography sx={{ display: 'block', height: '100%', mb: 3 }} variant={'body2'}
                  color={theme.palette.secondary.main}>
        {text}
      </Typography>
      <Link style={{textDecoration: 'none', alignSelf: 'flex-end'}} to={`/${id}`}>
        <Button sx={{borderRadius: '20px' }} variant={'outlined'}>Details</Button>
      </Link>
    </Paper>
  );
};

export default Task;