import { Box, Modal } from '@mui/material';
import * as React from 'react';
import '../App.css';
import AddTaskForm from './AddTaskForm';
import { useId } from 'react-id-generator';
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


function AddNewTask({ setOpenModal, open, addTask, handleCloseModal, listId }) {
  const {totalCount} = useSelector(({boards}) => boards)
  const [htmlId] = useId();

  const onSubmit = (data) => {
    let catId = Number(totalCount ) + Number(htmlId[2])
    console.log(catId)
    let newTask = {
      ...data,
      listId
    };
    addTask(newTask);
  }

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
        >
        <AddTaskForm onSubmit={onSubmit}/>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewTask;