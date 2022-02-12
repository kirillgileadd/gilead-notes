import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Catygory } from './Task';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailTask } from '../redux/actions/boards';
import { alpha } from '@mui/material/styles';
import LoadingBoards from './LoadingBoards';
import { useNavigate } from "react-router-dom";

const DetailTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [task, setTask] = useState(null);
  const { categoryList } = useSelector(({ categories }) => categories);
  let currentCategory = categoryList.find((cat) => cat.name === task?.category);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailTask(id, setTask));
  }, []);

  const goBackPage = () => {
    navigate(-1)
  }

  return (
    <Box sx={{ textAlign: 'start', p: 4 }}>
      <Box sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
          <IconButton onClick={goBackPage} sx={{ mr: 2, color: 'primary.main' }}>
            <ArrowBackIcon />
          </IconButton>
      </Box>
      {
        task ?
        <>
          <Box sx={{ display: 'flex', marginBottom: '25px' }} display={'flex'} justifyContent={'space-between'}>
            <Typography sx={{ mr: 2 }} variant={'h5'}>{task.title || 'Untitled'}</Typography>
            {
              currentCategory &&
              <Catygory color={currentCategory?.color} backgroundColor={alpha(currentCategory?.color, 0.1)}>
                {currentCategory?.name}
              </Catygory>
            }
          </Box>
          <Typography color={'secondary'} variant={'body1'}>{task.text}</Typography>
        </> : <LoadingBoards/>
      }
    </Box>
  );
};

export default DetailTask;