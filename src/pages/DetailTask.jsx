import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Category } from '../components/Task';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { alpha } from '@mui/material/styles';
import LoadingBoards from '../components/LoadingBoards';
import { tasksAPI } from '../api/api';
import { useCurrentCategory } from '../hooks/useCurrentCategory';

const DetailTask = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [task, setTask] = useState(null);
  const { categoryList } = useSelector(({ categories }) => categories);
  let currentCategory = useCurrentCategory(task?.category, categoryList);

  useEffect(() => {
    try {
      (async function() {
        const response = await tasksAPI.getTask(id);
        setTask(response.data);
      })(id);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Box sx={{ textAlign: 'start', p: 4 }}>
      <Box sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 2, color: 'primary.main' }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      {
        task ?
          <>
            <Box
              sx={{ marginBottom: '25px' }}
              display='flex'
              justifyContent='space-between'
            >
              <Typography sx={{ mr: 2 }} variant={'h5'}>{task.title || 'Untitled'}</Typography>
              {currentCategory &&
                <Category
                  color={currentCategory?.color}
                  backgroundColor={alpha(currentCategory?.color, 0.1)}>
                  {currentCategory?.name}
                </Category>}
            </Box>
            <Typography color={'secondary'} variant={'body1'}>{task.text}</Typography>
          </>
          :
          <LoadingBoards />
      }
    </Box>
  );
};

export default DetailTask;