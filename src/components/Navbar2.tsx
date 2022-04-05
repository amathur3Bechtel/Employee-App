import { AppBar , Link, makeStyles, Toolbar, Typography} from '@material-ui/core'
import { FormatItalic, MarginOutlined, NoEncryptionTwoTone } from '@mui/icons-material';
import { fontSize } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-router-dom';
import AllUsers from './AllUsers';
import CreateUser from './CreateUser';

const useStyle = makeStyles({
    header: {
        background: "#A45110"
    },
    tabs: {
        color: "#FFE5B4",
        textDecoration: "none",
        marginRight: 60,
        fontSize: 40,
        marginLeft: 250,
    },

})

const Navbar2 = () => {
    const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
        <Toolbar>
            <NavLink className={classes.tabs}to="/all">All Users</NavLink>
            <NavLink className={classes.tabs} to="/add">Create User</NavLink>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar2;