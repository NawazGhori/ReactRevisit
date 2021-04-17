import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import MenuIcon from '@material-ui/icons/Menu';



interface IProps{}

interface IState{}




class AppBarComponent extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    };
    render(){
      return(
         <React.Fragment>
             <div style={{flexGrow:1}}>
               <AppBar position="static">
                  <Toolbar>
                     <IconButton edge="start" style={{marginRight:16}} color="inherit">
                        <MenuIcon />
                     </IconButton>
                     <Typography variant="h6" style={{flexGrow:1}} color="inherit">
                          React ReVisit
                     </Typography>
                     <Button color="inherit">Login</Button>
                  </Toolbar>
               </AppBar>
             </div>
         </React.Fragment>
      )
    }
};


export default AppBarComponent;