import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';

import '../App.css';
import { Box, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import styled from '@emotion/styled';
import logo from '../assets/finalLogo.svg';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';


const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  padding: '20px'
}));

const NavBar = () => {
  return (
    <Grid item xs={2} sx={{ height: '100%', borderRight: '1px solid #ededed', textAlign: 'left' }}>
      <Box>
        <Box display={'flex'} alignItems={'center'} sx={{p: 2, mb: 1}}>
          <img style={{width: '40px', marginRight: '8px'}} src={logo} alt='' />
          <Typography variant={'h5'} sx={{fontWeight: '600', alignSelf: 'flex-end' }}>.GileadNote</Typography>
        </Box>
        <MenuList dense sx={{
          '& .active': {
            borderRight: `5px solid`,
            borderColor: 'primary.main',
            transition: "all 0.3s",
            backgroundColor: 'inherit'
          },

        }}>
          <MyMenuItem component={NavLink} to={'/'}>
            <ListItemIcon color={'black'}>
              <TextSnippetOutlinedIcon className={'icon'} />
            </ListItemIcon>
            <ListItemText >
              <Typography color={'black'} variant={'body1'}>Notes</Typography>
            </ListItemText>
          </MyMenuItem>
          <MyMenuItem component={NavLink} to={'/stats'}>
            <ListItemIcon color={'black'}>
              <StackedLineChartIcon className={'icon'} />
            </ListItemIcon>
            <ListItemText >
              <Typography color={'black'} variant={'body1'}>Stats</Typography>
            </ListItemText>
          </MyMenuItem>
          <Box sx={{flexGrow: 1}}/>
          <CategoriesMenu/>
        </MenuList>
      </Box>
    </Grid>
  );
};

export default NavBar;