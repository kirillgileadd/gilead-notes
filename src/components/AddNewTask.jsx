import { Box, Button, Modal } from '@mui/material';
import * as React from 'react';
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


function AddNewTask({ setOpenModal, open, addTask, handleCloseModal, listId }) {
  const { totalCount } = useSelector(({ boards }) => boards);
  const handleInputChange = () => {

  };

  const handleChange = () => {

  };

  const addNewTask = (e) => {
    let newTask = {
      id: Math.random(), //use Id generator
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
          <Button type={'button'} sx={{ display: 'block' }} variant={'contained'}
                  onClick={(e) => addNewTask(e)}>ADD TASK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewTask;