import { Box, Button, css, Modal, TextField, Typography } from '@mui/material';
import * as React from 'react';
import CreatableSelect from 'react-select/creatable';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import '../App.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
  // { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  // { value: 'orange', label: 'Orange', color: '#FF8B00' },
  // { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  // { value: 'green', label: 'Green', color: '#36B37E' },
  // { value: 'forest', label: 'Forest', color: '#00875A' },
  // { value: 'slate', label: 'Slate', color: '#253858' },
  // { value: 'silver', label: 'Silver', color: '#666666' },
];

function AddModal({ setOpenModal, open, addTask, handleCloseModal }) {
  const handleInputChange = () => {

  };

  const handleChange = () => {

  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} component={'form'}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add New Task
          </Typography>
          <TextField fullWidth sx={{ mb: 1 }} variant={'standard'} label={'Title'} />
          <TextField maxRows={5} multiline fullWidth sx={{ mb: 3 }} variant={'standard'} label={'Text'} />
          <CreatableSelect
            styles={colourStyles}
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={colourOptions}
          />
          <Button sx={{ display: 'block' }} variant={'contained'}
                  onClick={() => addTask({ title: 'New Task', text: 'newText', id: 10, category: 'NewCategory' })}>ADD
            TASK</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddModal;