import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './mystyle.css';
import barrel from './ressources/barrel.svg';
import grape from './ressources/grape.svg';
import grapes from './ressources/grape.svg';
import grapespurple from './ressources/grapes-purple.svg';
import leaf from './ressources/leaf.svg';
import grapevideo from './ressources/grappe-video.mp4';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import Divider from "@mui/material/Divider";


const Svgproj1 = () => {
    const bigtitle = useRef(null);
    const lineobj = useRef(null);
    const grapeobj = useRef(null);
    const btnobj = useRef(null);
    const tabRefs = useRef([]);

    useEffect(() => {
        const revealAnim = () => {
            const bigtitleEl = bigtitle.current;
            const lineobjEl = lineobj.current;
            const grapeobjEl = grapeobj.current;
            const btnobjEL = btnobj.current;
            const tabsEl = tabRefs.current;
            const TLFADE = gsap.timeline();
            TLFADE
                .from(bigtitleEl, { autoAlpha: 0, y: -50, delay: 0.2 })
                .to(lineobjEl, { height: 200 }, '-=0.2')
                .from(grapeobjEl, { autoAlpha: 0, y: -50 }, '-=0.2')
                .from(btnobjEL, { autoAlpha: 0, y: -50 }, '-=0.2')
                .from(tabsEl, { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 }, '-=0.2');
        };

        window.addEventListener('load', revealAnim);

        return () => {
            window.removeEventListener('load', revealAnim);
        };
    }, []);
    //
    // window.addEventListener('load',revealAnim);
    // function revealAnim(){
    //     const bigtitleEl = bigtitle.current;
    //     const lineobjEl = lineobj.current;
    //     const grapeobjEl = grapeobj.current;
    //     const btnobjEL = btnobj.current;
    //     const tabsEl = tabRefs.current;
    //     const TLFADE = gsap.timeline();
    //     TLFADE
    //         .from(bigtitleEl,{autoAlpha:0,y:-50,delay:0.2})
    //         .to(lineobjEl,{height:200},'-=0.2')
    //         .from(grapeobjEl,{autoAlpha:0,y:-50},'-=0.2')
    //         .from(btnobjEL,{autoAlpha:0,y:-50},'-=0.2')
    //         .from(tabsEl,{autoAlpha:0,y:-50,duration:0.4,stagger:0.1},'-=0.2')
    //
    // }

    return (
        <div>
            <AppBar sx={{ height: '100px', bgcolor: 'transparent', boxShadow: '0', position: 'absolute' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' , bgcolor:'transparent'}}>
                    <img src={barrel}  ref={(el) => (tabRefs.current[0] = el)} alt="logo château" className="logo barrel" style={{width:'50px',height:'auto', marginRight:'300px',visibility:'hidden',}}/>
                    <Tabs sx={{ textDecoration: 'none' }}>
                        <Tab label={'Home'}  ref={(el) => (tabRefs.current[1] = el)} sx={{
                            color: 'white', fontWeight: 'bold', textDecoration: 'none',visibility:'hidden',
                            ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' }
                        }}></Tab>
                        <Tab label={'Wines'}  ref={(el) => (tabRefs.current[2] = el)} sx={{
                            color: 'white', fontWeight: 'bold', textDecoration: 'none',visibility:'hidden',
                            ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' }
                        }}>></Tab>
                        <Tab label={'Contact'}  ref={(el) => (tabRefs.current[3] = el)} sx={{
                            color: 'white', fontWeight: 'bold', textDecoration: 'none',visibility:'hidden',
                            ':hover': { textDecoration: 'underline', textUnderlineOffset: '5px' }
                        }}>></Tab>
                    </Tabs>
                    <img src={leaf}  ref={(el) => (tabRefs.current[4] = el)} alt="logo feuille" style={{width:'50px',height:'auto', marginLeft:'300px',visibility:'hidden',}}/>
                </Toolbar>
            </AppBar>

                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'} zIndex={'150'} position={'absolute'} top={'200px'} left={'36%'}>
                    <Typography variant={'h1'} color={'white'} ref={bigtitle} sx={{visibility:'hidden',}}>Exceptional</Typography>
                    <Typography variant={'h1'} color={'white'} ref={bigtitle} sx={{visibility:'hidden',}}>vineyards</Typography>
                    <Divider orientation="vertical" color={'white'} ref={lineobj} sx={{height:'0px',width:'1px', margin:'auto', marginTop:'20px', marginBottom:'20px'}}/>
                    <img src={grape} alt="" ref={grapeobj} style={{width:'50px',height:'auto', margin:'auto', marginTop:'20px', marginBottom:'20px',visibility:'hidden',}}/>
                    <Button variant={'outlined'} ref={btnobj} sx={{color:'white', borderColor:'white',width:'100px', margin:'auto', marginTop:'20px', marginBottom:'20px',visibility:'hidden',}}>DISCOVER</Button>
                </Box>
                <Box zIndex={'50'} sx={{position:'absolute',width:'100%',height:'100%'}}>
                    <div className="overlay"></div>
                    <video autoPlay muted loop>
                        <source src={grapevideo} type="video/mp4" />
                    </video>
                </Box>
        </div>
    );
};

export default Svgproj1;