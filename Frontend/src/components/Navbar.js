import React, {useState} from 'react';
import {AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DrawerComp from "./DrawerComp";

const Navbar = ({links}) => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const [value,setValue] = useState();

    return (
        <AppBar sx={{backgroundImage:'background: rgb(237,163,255);\n' +
                'background: linear-gradient(90deg, rgba(237,163,255,1) 0%, rgba(129,6,150,1) 46%, rgba(102,0,255,1) 100%);'}}>
            <Toolbar>
                {isMatch ?
                    <>
                    <Typography>
                        <LocalGroceryStoreIcon/>
                    </Typography>
                    <DrawerComp links={links}></DrawerComp>
                    </>
                    :
                    <Grid sx={{placeItems: 'center'}} container>
                    <Grid item xs={2}>
                        <Typography>
                            <LocalGroceryStoreIcon/>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs indicatorColor={"secondary"} textColor={"inherit"} value={value}
                              onChange={(event, val) => setValue(val)}>
                            {links.map((link, index) => (<Tab key={index} label={link}/>))}
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <Box>
                            <Button sx={{marginLeft: 'auto', backgroundColor: 'rgba(129,6,150,1)'}}
                                    variant={'contained'}>Login</Button>
                            <Button sx={{marginLeft: 1, backgroundColor: 'rgba(129,6,150,1)'}}
                                    variant={'contained'}>Signup</Button>
                        </Box>
                    </Grid>
                </Grid>}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;