import { AppBar , makeStyles, Toolbar, Typography} from '@material-ui/core'
import { BoltOutlined, FormatItalic } from '@mui/icons-material';
import { sizing } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { text } from 'stream/consumers';
import { withTheme } from 'styled-components';

const useStyle = makeStyles({
    header: {
        background: "#C12503",
        alignItems: "center",
    },
    appbar:{
        fontSize: 75,
        textDecoration: "none",
    }
})

const Navbar = () => {
    const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static" >
        <Toolbar>
            <NavLink className={classes.appbar} to="/">Employee Data</NavLink>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

