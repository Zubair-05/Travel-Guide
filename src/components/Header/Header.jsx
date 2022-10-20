// eslint-disable-next-line

import React from "react";
import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar, InputBase, Typography, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'

function Header(){
    const classes = useStyles();

    return(
        <AppBar position="static" color="primary">
          <Toolbar className = {classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
              Travel Guide
            </Typography>
            <Box display="flex">
                <Typography variant="h5" className={classes.title}>
                Explore new places
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search..." classes={{root:classes.InputRoot, input: classes.inputInput}}/>
                    </div>
                {/* </Autocomplete> */}
            </Box>
          </Toolbar>
        </AppBar>
    );
}

export default Header;