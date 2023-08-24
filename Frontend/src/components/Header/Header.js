import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';
import SwipeableTemporaryDrawer from './drawer';


const links = ["Shop","Gallery","About Us"];
const falinks = ["خدمات","گالری","درباره ما"];
const reversedfalinks = falinks.reverse();
const drwfalinks = ["درباره ما","گالری","فروشگاه"];
const Header = () => {

    const muiTheme = useTheme();
    const isMatch = useMediaQuery(muiTheme.breakpoints.down('md'));
    const [lang,setLang] = useState('fa');
    const [tab,setTabs] = useState('');

    const history = useNavigate();
    const TabHandler = (event,value) => {
        let newValue = value;
        if(lang == 'fa'){
            newValue = links.length - value -1;
        }
        if(lang == 'en'){
            newValue = value;
        }
        if(newValue==0){
            history('/services/');
        }
        if(newValue==1){
            history('/gallery/');
        }
        if(newValue==2){
            history('/aboutus/');
        }
    };
    const ContactUs = (event) => {
        window.open('https://wa.me/+989334593252/', '_blank');
    };
    const Callus = (event) => {
        window.location.href = 'tel:+989334593252';
    }
    const heighApp = isMatch ? '80px':'150px';
    return (
      <AppBar sx={{height:heighApp,bgcolor:'#333133', boxShadow:'0', position:'sticky'}}>
          {!isMatch ?
          <>
          { lang=='en' ?
              <>
          <Toolbar>
              <Box sx={{display:'flex',width:'100%',alignItems:'center', height:'100%'}}>
                  <Box height={'100%'} marginTop={'100px'}>
                <ApiIcon sx={{color:'white' , marginRight:'20px'}}/>
                  </Box>
                  <Box height={'100%'} marginTop={'100px'}>
                        <Tabs sx={{textDecoration:'none'}} >
                            {links.map((link,index)=>(<Tab  label={link} key={index} sx={{color:'white',fontWeight:'bold',textDecoration:'none',
                                ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}} onClick={(event)=>{TabHandler(event,index)}}/>))}
                        </Tabs>
                  </Box>
                  <Box display={'flex'} marginLeft={'auto'} height={'100%'}>
                      <Box height={'30%'} marginTop={'50px'}>
                      <Button variant={'outlined'} sx={{marginRight:2, color:'#19999F'}}><Typography  color={'white'} fontSize={'15px'} fontWeight={'bold'} onClick={event => ContactUs(event)}>Contact Us</Typography></Button>
                      <Button variant={'contained'} sx={{marginLeft:2, marginRight:2, color:'#19999F'}}><Typography  color={'white'} fontSize={'15px'} fontWeight={'bold'} onClick={ event => Callus(event)}>Reservation</Typography></Button>
                      </Box>
                      <Box display={'flex'} flexDirection={'column'} sx={{marginRight:2, color:'white'}} marginTop={'50px'}>
                          <Button variant={'outlined'} sx={{height:'7px',width:'7px' , marginBot:'10px'}} onClick={() => setLang('fa')}>fa</Button>
                          <Button variant={'contained'} sx={{height:'7px',width:'7px' , marginTop:'10px'}} onClick={() => setLang('en')}>en</Button>
                      </Box>
                  </Box>
              </Box>
          </Toolbar>
              </>
          :
              <>
                  <Toolbar>
                      <Box sx={{display:'flex',width:'100%',alignItems:'center', height:'100%'}}>
                          <Box display={'flex'} marginRight={'auto'} height={'100%'}>
                              <Box display={'flex'} flexDirection={'column'} sx={{marginRight:2, color:'white'}} marginTop={'50px'}>
                                  <Button variant={'outlined'} sx={{height:'7px',width:'7px' , marginBot:'10px'}} onClick={() => setLang('fa')}>fa</Button>
                                  <Button variant={'contained'} sx={{height:'7px',width:'7px' , marginTop:'10px'}} onClick={() => setLang('en')}>en</Button>
                              </Box>
                              <Box height={'30%'} marginTop={'50px'}>
                                  <Button variant={'contained'} sx={{marginLeft:2, marginRight:2}}><Typography color={'white'} fontSize={'20px'} fontWeight={'bold'} onClick={event => ContactUs(event)}>مشاوره</Typography></Button>
                                  <Button variant={'outlined'} sx={{marginRight:2, color:'white'}}><Typography color={'white'} fontSize={'20px'} fontWeight={'bold'} onClick={ event => Callus(event)}>تماس با ما</Typography></Button>
                              </Box>
                          </Box>
                          <Box height={'100%'} marginTop={'100px'}>
                              <Tabs sx={{textDecoration:'none'}} >
                                  {falinks.map((link,index)=>(<Tab  label={link} key={index} sx={{color:'white',fontSize:'20px',fontWeight:'bold',textDecoration:'none',
                                      ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}} onClick={(event)=>{TabHandler(event,index)}}/>))}
                              </Tabs>
                          </Box>
                          <Box height={'100%'} marginTop={'100px'}>
                              <ApiIcon sx={{color:'white', marginLeft:'20px'}}/>
                          </Box>
                      </Box>
                  </Toolbar>
              </>}
          </>
          :
              <>
                  { lang=='en' ?
              			<Box sx={{display:'flex',width:'100%', height:'100%', marginTop:'2px'}}>
                            <SwipeableTemporaryDrawer link={links} lang={lang}/>
                        </Box>
                      :
                      	<Box sx={{display:'flex',width:'100%', height:'100%', marginTop:'2px'}}>
                            <SwipeableTemporaryDrawer link={falinks} lang={lang}/>
                        </Box>
                  }
              </>}
      </AppBar>
    );
}

export default Header;