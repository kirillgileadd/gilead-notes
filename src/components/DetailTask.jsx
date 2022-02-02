import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Catygory } from './Task';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailTask } from '../redux/actions/boards';
import { alpha } from '@mui/material/styles';

const DetailTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ });
  const { categoryList } = useSelector(({ categories }) => categories);
  let currentCategory = categoryList.find((cat) => cat.name === task.category)
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailTask(id, setTask));
  }, []);

  return (
    <Box sx={{ textAlign: 'start', p: 4 }}>
      <Box sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
        <Link style={{ textDecoration: 'none' }} to={'/'}>
          <IconButton sx={{ mr: 2, color: `${theme.palette.primary.main}` }}>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <IconButton sx={{ mr: 2, color: `${theme.palette.primary.main}` }}>
          <EditIcon />
        </IconButton>
        <IconButton sx={{ mr: 2, color: `${theme.palette.primary.main}` }}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', marginBottom: '25px' }} display={'flex'} justifyContent={'space-between'}>
        <Typography sx={{ mr: 2 }} variant={'h5'}>{task.title}</Typography>
        {
          currentCategory && <Catygory color={currentCategory?.color} backgroundColor={alpha(currentCategory?.color, 0.1)}>
            {currentCategory?.name}
          </Catygory>
        }
      </Box>
      <Typography color={'secondary'} variant={'body1'}>{task.text}</Typography>
    </Box>
  );
};

export default DetailTask;