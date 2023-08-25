import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './mystyle.css';
import barrel from './ressources/barrel.svg';
import grape from './ressources/grape.svg';
import grapes from './ressources/grapes.svg';
import grapespurple from './ressources/grapes-purple.svg';
import leaf from './ressources/leaf.svg';
import grapevideo from './ressources/grappe-video.mp4';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import Divider from "@mui/material/Divider";


const Svgproj1 = () => {

    return (
        <div>
            <AppBar sx={{ height: '100px', bgcolor: 'transparent', boxShadow: '0', position: 'sticky' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={barrel} alt="logo château" className="logo barrel" style={{width:'50px',height:'auto', marginRight:'300px'}}/>
                    <Tabs sx={{ textDecoration: 'none' }}>
                        <Tab label={'Home'} sx={{
                            color: 'white', fontWeight: 'bold', textDecoration: 'none',
                            ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' }
                        }}></Tab>
                        <Tab label={'Wines'} sx={{
                            color: 'white', fontWeight: 'bold', textDecoration: 'none',
                            ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' }
                        }}>></Tab>
                        <Tab label={'Contact'} sx={{
                            color: 'white', fontWeight: 'bold', textDecoration: 'none',
                            ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' }
                        }}>></Tab>
                    </Tabs>
                    <img src={leaf} alt="logo feuille" style={{width:'50px',height:'auto', marginLeft:'300px'}}/>
                </Toolbar>
            </AppBar>
                <div className="overlay"></div>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'} zIndex={'150'} position={'absolute'} top={'200px'} left={'36%'}>
                    <Typography variant={'h1'} color={'white'}>Exceptional</Typography>
                    <Typography variant={'h1'} color={'white'}>vineyards</Typography>
                    <Divider orientation="vertical" color={'white'} sx={{height:'200px',width:'1px', margin:'auto', marginTop:'20px', marginBottom:'20px'}}/>
                    <img src={grape} alt="" style={{width:'50px',height:'auto', margin:'auto', marginTop:'20px', marginBottom:'20px'}}/>
                    <Button variant={'outlined'} sx={{color:'white', borderColor:'white',width:'100px', margin:'auto', marginTop:'20px', marginBottom:'20px'}}>DISCOVER</Button>
                </Box>
                <Box zIndex={'50'}>
                    <video autoPlay muted loop>
                        <source src={grapevideo} type="video/mp4" />
                    </video>
                </Box>
        </div>
    );
};

export default Svgproj1;