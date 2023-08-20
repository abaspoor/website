import React from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";

const links = ["Services","Gallery","About Us"];
const falinks=["درباره ما","گالری","فروشگاه"];
const lang = 'fa';
const smths = () => {

    const TabHandler = (event, newValue) => {
        if(lang=='fa'){console.log(falinks.length - newValue-1);}
        else{console.log(newValue);}
    };

    return (
        <AppBar sx={{bgcolor:'transparent', boxShadow:'0', position:'relative'}}>
            <Box width={"100%"} height={"50vh"}>
                <video src="/label.mp4" width={'100%'} height={'100%'} autoPlay loop muted playsInline></video>
                <Box display={'flex'} width={'100%'}>
                    <Typography margin={'auto'} variant={'h4'} color={'black'} textAlign={'center'}>Build Your Softwares hassle Free with </Typography>
                </Box>
            </Box>
        </AppBar>
    );
}

export default smths;