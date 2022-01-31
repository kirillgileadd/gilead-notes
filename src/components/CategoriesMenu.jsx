import * as React from 'react';
import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ListItemIcon, Typography } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryAction } from '../redux/actions/filter';
import { alpha } from '@mui/material/styles';
import { fetchBoards } from '../redux/actions/boards';
import { fetchCategories } from '../redux/actions/categories';

function CategoriesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {currentCategory} = useSelector(({filter}) => filter)
  const { categoryList } = useSelector(({categories}) => categories)
  const { isLoading } = useSelector(({categories}) => categories)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);

  const currentCategoryItem = categoryList.filter((item) => item.id === currentCategory)[0]

  useEffect(() => {
    dispatch(fetchBoards(1, currentCategoryItem))
    dispatch(fetchCategories())
  }, [currentCategory])

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

  return !isLoading &&
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemIcon sx={{display: 'inline-block', minWidth: '40px'}}>
            <CategoryOutlinedIcon className={'icon'}/>
          </ListItemIcon>
          <ListItemText
            primary="Category"
            secondary={currentCategoryItem?.name || 'All categories'}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        <MenuItem
          selected={currentCategory === null}
          onClick={() => handleMenuItemClick(null)}
        >
          All Category
        </MenuItem>
        {categoryList.map((option, index) => (
          <MenuItem
            sx={{p: 0}}
            key={option.name}
            selected={index === currentCategory}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <Typography sx={{width: '100%', height: '100%', p: 1, textAlign: 'center'}} color={option?.color} backgroundColor={alpha(option.color, 0.1)}>
              {option.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
}

export default CategoriesMenu