import React, { useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { addCategoryThunk } from '../redux/actions/categories';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useYup from '@usereact/use-yup';


const TitleInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main, fontSize: '60px', '& .MuiInputBase-input': {
    // padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'), width: '100%', height: '100px'
  }
}));

const TextInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main, fontSize: '20px', display: 'flex', alignItems: 'flex-start'
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%'
}));


const AddTaskForm = ({ onSubmit }) => {
  const schema = yup.object({
    category: yup.string().required('Select or add new category'), text: yup.string().required('Write the text')
  });


  const dispatch = useDispatch();
  const [categoryValue, setCategoryValue] = useState('');
  const [newCategoryValue, setNewCategoryValue] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const { categoryList } = useSelector(({ categories }) => categories);

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: 'onBlur', resolver: yupResolver(schema)
  });


  const handleChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const addNewCategory = (name) => {
    let catId = categoryList.length + 1;
    console.log(catId);
    let color = Math.floor(Math.random() * 16777215).toString(16);
    let newCategory = {
      color: `#${color}`, id: catId, name
    };
    dispatch(addCategoryThunk(newCategory));
    setOpenAlert(true);
  };

  return (<Form
    component={'form'}
    noValidate
    onSubmit={handleSubmit(onSubmit)}
  >
    <Box>
      <TitleInput
        fullWidth
        placeholder={'Untitled'}
        {...register('title')}
        id={'title'}
        name={'title'}
        type='text'
        error={!!errors.title}
        helperText={errors?.title?.message}
      />
      <Box display={'flex'}>
        <Box width={'100%'}>
          <TextInput
            multiline
            maxRows={10}
            fullWidth
            placeholder={'Enter some text'}
            {...register('text')}
            id={'text'}
            name={'text'}
            type='text'
            error={!!errors.text}
          />
          <Typography variant={'body2'} component={'h6'} color={'red'}>{errors?.text?.message}</Typography>
        </Box>
        <Box sx={{ ml: 3 }}>
          <Box sx={{ mb: 2 }} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <TextField
              fullWidth
              value={newCategoryValue}
              name={'newCategory'}
              onChange={(e) => setNewCategoryValue(e.target.value)}
              placeholder={'Add new Category'}
            />
            <IconButton onClick={() => addNewCategory(newCategoryValue)}>
              <AddIcon />
            </IconButton>
          </Box>
          <FormControl sx={{ width: '300px', mb: 2 }}>
            <InputLabel id='demo-simple-select-label'>Select Category</InputLabel>
            <Select
              {...register('category')}
              id={'category'}
              name={'category'}
              type='text'
              error={!!errors.category}
              helperText={errors?.category?.message}
              value={categoryValue}
              label='Select Category'
              onChange={handleChange}
            >
              {categoryList.map((item) => <MenuItem sx={{ color: item.color }}
                                                    value={item.name}>{item.name}</MenuItem>)}
            </Select>
          </FormControl>
          {openAlert && <Alert severity='success'>
            <AlertTitle>A category has been added</AlertTitle>
            Select a new <strong>category!</strong>
          </Alert>}
        </Box>
      </Box>
    </Box>
    <Button type={'submit'} sx={{ alignSelf: 'flex-end', justifySelf: 'end' }} variant={'contained'}>ADD TASK</Button>
  </Form>);
};

export default AddTaskForm;