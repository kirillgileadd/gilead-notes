import React from 'react';
import { Box, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../theme/theme';
import { Link, useLocation } from 'react-router-dom';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import '../App.css';
import CategoriesMenu from './CategoriesMenu';


const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  padding: '20px'
}));

const NavBar = () => {
  const pathname = useLocation();
  console.log(pathname.pathname);

  return (
    <Grid item xs={2} sx={{ height: '100%', borderRight: '1px solid #ededed', textAlign: 'left' }}>
      <Box>
        <Typography variant={'h5'} sx={{ p: 3, fontWeight: '600' }}>.GileadNote</Typography>
        <MenuList dense sx={{
          '& .Mui-selected': {
            borderRight: `5px solid ${theme.palette.primary.main}`,
            transition: "all 0.3s",
            backgroundColor: 'inherit'
          },

        }}>
          <MyMenuItem selected={'/' === pathname.pathname} component={Link} to={'/'}>
            <ListItemIcon color={'black'}>
              <TextSnippetIcon className={'icon'} />
            </ListItemIcon>
            <ListItemText >
              <Typography color={'black'} variant={'body1'}>Notes</Typography>
            </ListItemText>
          </MyMenuItem>
          <MyMenuItem selected={'/stats' === pathname.pathname} component={Link} to={'/stats'}>
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