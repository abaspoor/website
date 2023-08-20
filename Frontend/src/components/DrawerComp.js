import React, {useState} from "react";
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = ({links}) =>{

    const [open,setOpen]=useState(true);
    return (
      <>
      <Drawer PaperProps={{sx:{backgroundColor:'rgba(129,6,150,1)'}}} open={open} onClose={()=>setOpen(false)} anchor={'left'}>
          <List>
              {links.map((link,index)=>(<ListItemButton>
                  <ListItemIcon>
                      <ListItemText sx={{color:'white'}}>
                          {link}
                      </ListItemText>
                  </ListItemIcon>
              </ListItemButton>))}
          </List>
      </Drawer>
          <IconButton sx={{marginLeft:'auto', color:'white'}} onClick={()=>setOpen(!open)}>
              <MenuIcon/>
          </IconButton>
      </>
    );
}

export default DrawerComp;