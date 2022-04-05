import React from 'react'
import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, getUsers } from '../service/api';

const initialValue = {
    name: '',
    bun: '',
    empid: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})


const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, bun, empid, phone} = user;
    const { id } = useParams();
    const classes = useStyles();
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    },[]);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        await editUser(id,user);
        navigate("/all");
    }

    const onValueChange = (e: any) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
 
  return (
    <FormGroup className={classes.container}>
        <Typography variant='h4'>Edit Information</Typography>
        <FormControl>
            <InputLabel htmlFor='my-input'>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={name} id='my-input' aria-describedby='my-helper-text' />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor='my-input'>BUN ID</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='bun' value={bun} id='my-input' aria-describedby='my-helper-text' />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor='my-input'>Employee ID</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='empid' value={empid} id='my-input' aria-describedby='my-helper-text' />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor='my-input'>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id='my-input' aria-describedby='my-helper-text' />
        </FormControl>
        <FormControl>
            <Button variant='contained' color='primary' onClick={() => editUserDetails()}>Edit User</Button>
        </FormControl>
    </FormGroup>
  )
}

export default EditUser
