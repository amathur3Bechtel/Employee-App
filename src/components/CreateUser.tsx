import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';
 
const initialValue = {
    name: '',
    bun: '',
    empid: '',
    phone: ''
}

const useStyles = makeStyles({
    container:{
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop:20
        }
    }
})

const CreateUser = () => {
    const [user, setUser] = useState(initialValue);
    const {name, bun, empid, phone} = user;
    const classes = useStyles();
    let navigate = useNavigate();

    const onValueChange = (e:any) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }   
    
    const addUserDetails = async () => {
        await addUser(user);
        navigate("/all");
    }

  return (
      <FormGroup className={classes.container}>
          <Typography variant="h4">Add User</Typography>
          <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />              
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">BUN ID</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='bun' value={bun} id="my-input" />              
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Employee ID</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='empid' value={empid} id="my-input" />              
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Phone Number</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />              
          </FormControl>
          <FormControl>
              <Button variant="contained" color='primary' onClick={() => addUserDetails()}>Add User</Button>
          </FormControl>
      </FormGroup>
  )
}


export default CreateUser;

