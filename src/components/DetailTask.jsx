import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Catygory } from './Task';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '../theme/theme';

const DetailTask = () => {
  const [item, setItem] = useState({});

  let params = useParams();

  const fetchItem = async () => {
    const itemF = await fetch(
      `http://localhost:3001/tasks/${params.id}`
    );
    const item = await itemF.json();
    setItem(item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <Box sx={{textAlign: 'start', p: 4}}>
      <Box sx={{display: 'flex',  marginBottom: '10px', alignItems: 'center' }}>
        <Link style={{textDecoration: 'none'}} to={'/'}>
        <IconButton sx={{mr: 2, color: `${theme.palette.primary.main}`}}>
          <ArrowBackIcon/>
        </IconButton>
        </Link>
        <IconButton sx={{mr: 2, color: `${theme.palette.primary.main}`}}>
          <EditIcon/>
        </IconButton>
        <IconButton sx={{mr: 2, color: `${theme.palette.primary.main}`}}>
          <DeleteIcon/>
        </IconButton>
      </Box>
      <Box sx={{display: 'flex',  marginBottom: '25px'}}>
        <Typography sx={{mr: 2}} variant={'h5'}>{item.title}</Typography>
        <Catygory>
          {item.category}
        </Catygory>
      </Box>
      <Typography color={'secondary'} variant={'h6'}>{item.text}</Typography>
    </Box>
  );
};

export default DetailTask;