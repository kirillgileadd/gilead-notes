import React from 'react';
import { Box, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ContentCut from '@mui/icons-material/ContentCut';
import { theme } from '../theme/theme';
import { Link, useLocation } from 'react-router-dom';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
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
    <Grid item xs={3} sx={{ height: '100%', borderRight: '1px solid #ededed', textAlign: 'left' }}>
      <Box>
        <Typography variant={'h4'} sx={{ p: 4, fontWeight: '600' }}>.gileadToDo</Typography>
        <MenuList dense sx={{
          mt: '20px', '& .Mui-selected': {
            borderRight: `5px solid ${theme.palette.primary.main}`,
            transition: "all 0.3s",
            backgroundColor: 'inherit'
          },

        }}>
          <MyMenuItem selected={'/' === pathname.pathname} component={Link} to={'/'}>
            <ListItemIcon color={'black'}>
              <FolderOpenIcon className={'icon'} />
            </ListItemIcon>
            <ListItemText inset>
              <Typography color={'black'} variant={'h6'}>Projects</Typography>
            </ListItemText>
          </MyMenuItem>
          <MyMenuItem selected={'/stats' === pathname.pathname} component={Link} to={'/stats'}>
            <ListItemIcon color={'black'}>
              <StackedLineChartIcon className={'icon'} />
            </ListItemIcon>
            <ListItemText inset>
              <Typography color={'black'} variant={'h6'}>Stats</Typography>
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