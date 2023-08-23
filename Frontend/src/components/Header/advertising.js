import React from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';


const Advertising = () => {

    return (
        <Box width={'100%'} height={'200px'} alignContent={'center'}>
        <video src="/label.mp4" width={'100%'} height={'70%'} autoPlay loop muted playsInline></video>
            <Typography margin={'auto'} variant={'h4'} color={'#333133'} textAlign={'center'} fontWeight={'bold'}>زیبایی معنای زندگی</Typography>
        </Box>
    );
}

export default Advertising;