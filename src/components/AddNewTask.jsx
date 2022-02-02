import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import * as React from 'react';
import CreatableSelect from 'react-select/creatable';
import '../App.css';
import { useSelector } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  height: '70vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px'
};


const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10
  }
});

const colourStyles = {
  option: (styles) => {
    const color = "#000"
    return {
      ...styles,
    };
  },
  container: (styles) => {
    return {
      ...styles,
      borderRadius: '0px',
      border: 'none',
      marginBottom: '20px'
    }
  },
  control: (styles) => {
    return {
      ...styles,
      boxShadow: "none",
      borderRadius: '0px',
      border: 'none',
      marginBottom: '20px',
      borderBottom: '2px solid gray'
    }
  },
  input: (styles) => {
    return {
      ...styles,
      padding: '0px'
    }
  }
};


const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' }
];

function AddNewTask({ setOpenModal, open, addTask, handleCloseModal, listId }) {
  const { totalCount } = useSelector(({ boards }) => boards);
  const handleInputChange = () => {

  };

  const handleChange = () => {

  };

  const addNewTask = (e) => {
    let id = Number(totalCount) + 1
    let newTask = {
      title: 'New Task',
      text: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      category: 'Design',
      listId
    }
    addTask(newTask)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {/*<Typography id='modal-modal-title' variant='h6' component='h2'>*/}
          {/*  Add New Task*/}
          {/*</Typography>*/}
          {/*<TextField fullWidth sx={{ mb: 1 }} variant={'standard'} label={'Title'} />*/}
          {/*<TextField maxRows={5} multiline fullWidth sx={{ mb: 3 }} variant={'standard'} label={'Text'} />*/}
          {/*<CreatableSelect*/}
          {/*  styles={colourStyles}*/}
          {/*  isClearable*/}
          {/*  onChange={handleChange}*/}
          {/*  onInputChange={handleInputChange}*/}
          {/*  options={colourOptions}*/}
          {/*/>*/}
          <Button type={'button'} sx={{ display: 'block' }} variant={'contained'}
                  onClick={(e) => addNewTask(e)}>ADD TASK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewTask;