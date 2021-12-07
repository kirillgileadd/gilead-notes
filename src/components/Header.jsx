import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/actions/filter';
import { fetchBoards } from '../redux/actions/boards';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

const StyledAppBar = styled(AppBar)(({}) => ({
  height: '80px',
  boxShadow: 'none',
  backgroundColor: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  borderBottom: '1px solid #ededed'
}));

const Header = () => {
  const dispatch = useDispatch()
  const {search} = useSelector(({filter}) => filter)

  const handleSearchValue = (e) => {
    const {value} = e.target
    console.log(value)
    dispatch(setSearch(value))
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position='static' sx={{}}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color={'secondary'} />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={handleSearchValue}
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex', '& .MuiIconButton-sizeLarge': '500px' } }}>
            <IconButton
              size={'large'}
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle fontSize={'large'} color={'primary'} />
            </IconButton>
          </Box>
          <Typography sx={{ ml: 2 }} color={'black'}>kirillgilead</Typography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;