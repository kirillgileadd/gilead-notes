import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ListItemIcon } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryAction } from '../redux/actions/filter';
import { green, pink, purple, red } from '@mui/material/colors';
import styled from '@emotion/styled';
export const options = [
  'All Category',
  'Technologies',
  'Design',
  'Program',
];

export const options2 = [
  {name: 'All Category', color: "#2C9A85"},
  {name: 'Technologies', color: '#f55742'},
  {name: 'Design', color: '#f5e342'},
  {name: 'Program', color: "#da42f5"},
];

const StyledMenuItem = styled(MenuItem)(({theme}) => {
})

function CategoriesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {category} = useSelector(({filter}) => filter)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);

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

  return (
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
            secondary={options[category]}
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
        {options2.map((option, index) => (

          <MenuItem

            key={option.name}
            selected={index === category}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CategoriesMenu