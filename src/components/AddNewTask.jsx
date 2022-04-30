import { Box, Modal } from '@mui/material';
import * as React from 'react';
import '../App.css';
import AddTaskForm from './AddTaskForm';
import { useDispatch } from 'react-redux';
import { addCategoryThunk } from '../redux/actions/categories';

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
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const { category, newCategory, title, text } = data

    if(newCategory && !category) {
      let color = Math.floor(Math.random() * 16777215).toString(16);
      let newCategoryObj = {
        color: `#${color}`, name: newCategory
      };
      dispatch(addCategoryThunk(newCategoryObj));
    }

    let newTask = {
      title,
      text,
      category: !category ? newCategory : category,
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
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewTask;