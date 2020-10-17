import  React from "react";
import {AppBar,makeStyles,Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles((theme) => {
    console.log("STYLE", theme);
});


const Navbar = () => {
    const classes = useStyle();
   return <AppBar  position="static" style={{ flexFlow: 1 },{ background: '#000000' }}>
        <Toolbar>
            <IconButton color="inherit">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6">Live Status</Typography>
            <span style={{ flexGrow: 1 }}></span>
        </Toolbar>
   </AppBar>;
};

export  default Navbar;
