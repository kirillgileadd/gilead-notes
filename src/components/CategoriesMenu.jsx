import * as React from 'react';
import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, ListItemIcon, Typography } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryAction } from '../redux/actions/filter';
import { deleteCategoryThunk, fetchCategories } from '../redux/actions/categories';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCurrentCategory } from '../hooks/useCurrentCategory';

function CategoriesMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentCategory } = useSelector(({ filter }) => filter);
  const { categoryList } = useSelector(({ categories }) => categories);

  const currentCategoryItem = useCurrentCategory(currentCategory, categoryList)

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const deleteCategory = (id) => {
    if (window.confirm('Do you really want to delete a category?')) {
      dispatch(deleteCategoryThunk(id));
    }
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    dispatch(setCategoryAction(index));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <div>
    <List
      component='nav'
      aria-label='Device settings'
      sx={{ bgcolor: 'background.paper' }}
    >
      <ListItem
        id='lock-button'
        aria-haspopup='listbox'
        aria-controls='lock-menu'
        aria-label='when device is locked'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <ListItemIcon sx={{ display: 'inline-block', minWidth: '40px' }}>
          <CategoryOutlinedIcon className={'icon'} />
        </ListItemIcon>
        <ListItemText
          primary='Categories'
          secondary={currentCategoryItem?.name || 'All categories'}
        />
      </ListItem>
    </List>
    <Menu
      id='lock-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'lock-button',
        role: 'listbox'
      }}
      sx={{
        '& .Mui-selected': {
          backgroundColor: 'transparent'
        }
      }}
    >
      <MenuItem
        selected={!currentCategoryItem?.name}
        onClick={(e) => handleMenuItemClick(e, null)}
      >
        All Categories
      </MenuItem>
      {categoryList.map((option, index) => (
        <Box key={option.name} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <MenuItem
            sx={{ p: 0, width: '100%' }}
            selected={index === currentCategory}
            onClick={(event) => handleMenuItemClick(event, option.id)}
          >
            <Typography sx={{ width: '100%', height: '100%', p: 1 }} color={option?.color}>
              {option.name}
            </Typography>
          </MenuItem>
          <IconButton onClick={() => deleteCategory(option.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      ))}
    </Menu>
  </div>;
}

export default CategoriesMenu;