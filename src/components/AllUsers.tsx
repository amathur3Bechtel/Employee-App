import { Button, TableBody, TableCell, TableHead, TableRow , makeStyles , Table } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../service/api'

const useStyles = makeStyles({
    table:{
        width: '90%',
        margin: '50px 0 0 50px',
        background: "#b3ffff",
    },
    thead:{
        '& > *':{
            fontSize: 20,
            background: '#660000',
            color: '#FFFFFF'
        }
    },
    row:{
        '& > *': {
            fontSize: 18
        }
    },
    back: {
        background: "#b3ffff"
    },
    
})

const AllUsers = () => {

  const [users, setUsers] = useState<any[]>([]);
  const classes = useStyles();

  useEffect(() => {
      getAllUsers();
  }, []);

  const deleteUserData = async(id: any) => {
      await deleteUser(id);
      getAllUsers();
  }

  const getAllUsers = async () => {
       let response =  await getUsers();
       setUsers(response.data);
  }

  return (
    <div className={classes.back}>
    <Table className={classes.table}>
    <TableHead>
        <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>BUN</TableCell>
            <TableCell>EMPLOYEE ID</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>ACTIONS</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {users.map((user) => (
            <TableRow className={classes.row} key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.bun}</TableCell>
                <TableCell>{user.empid}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                    <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                    <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
</div>
  )
}

export default AllUsers;


