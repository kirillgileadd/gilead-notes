import { Box, Modal } from '@mui/material';
import * as React from 'react';
import '../App.css';
import AddTaskForm from './AddTaskForm';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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


function AddNewTask({ setOpenModal, open, addTask, handleCloseModal, listId }) {
  const onSubmit = (data) => {
    let newId = Math.random(); // id-generator
    let newTask = {
      id: newId,
      ...data,
      listId
    };
    addTask(newTask);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={style}
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
        >
          <AddTaskForm onSubmit={onSubmit} />
          <IconButton onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewTask;