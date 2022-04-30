import React from 'react';
import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useSelector } from 'react-redux';
import { Controller, useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const TitleInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main, fontSize: '60px',
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '100px'
  }
}));

const TextInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '20px',
  display: 'flex',
  alignItems: 'flex-start'
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  height: "100%",
  width: "100%",
  flexDirection: 'column'
}));

const schema = yup.object({
  category: yup.string(),
  text: yup.string().required('Write the text'),
  newCategory: yup.string()
});


const AddTaskForm = ({ onSubmit }) => {
  const { categoryList } = useSelector(({ categories }) => categories);

  const { register, control, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: ''
    }
  });

  const { dirtyFields } = useFormState({
    control
  });

  return (
    <Form
      component={'form'}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <TitleInput
        fullWidth
        placeholder={'Untitled'}
        {...register('title')}
        id={'title'}
        name={'title'}
        type='text'
        error={!!errors.title}
      />
      <TextInput
        sx={{flexGrow: 1}}
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
      <Typography
        variant={'body2'}
        component={'h6'}
        color={'red'}
      >
        {errors?.text?.message}
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        sx={{width: "300px"}}
      >
        <InputLabel id='demo-simple-select-label'>Select Category</InputLabel>
        <Controller
          name='category'
          control={control}
          render={({ field }) => <Select
            {...field}
            sx={{mb: 1}}
            error={!!errors.category}
          >
            <MenuItem
              value=''
              defaultValue
            >
              Add new category
            </MenuItem>
            {categoryList.map((item) => <MenuItem
              key={item.id}
              sx={{ color: item.color }}
              value={item.name}
            >
              {item.name}
            </MenuItem>)}
          </Select>}
        >
        </Controller>
        {!dirtyFields.category &&
          <TextField
            fullWidth
            {...register('newCategory')}
            name={'newCategory'}
            placeholder={'Add new Category'}
          />}
      </Box>
      <Button type={'submit'} sx={{ alignSelf: 'flex-end', justifySelf: 'end' }} variant={'contained'}>ADD TASK</Button>
    </Form>);
};

export default AddTaskForm;