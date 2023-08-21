import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';
import SwipeableTemporaryDrawer from './drawer';
const links = ["Shop","Gallery","About Us"];
const falinks = ["فروشگاه","گالری","درباره ما"];
const reversedfalinks = falinks.reverse();
const drwfalinks = ["درباره ما","گالری","فروشگاه"];
const Header = () => {

    const muiTheme = useTheme();
    const isMatch = useMediaQuery(muiTheme.breakpoints.down('md'));
    const [lang,setLang] = useState('fa');

    const history = useNavigate();
    const TabHandler = (event, newValue) => {
        if(lang=='fa'){
            const value = links.length - newValue
            history('/shop/');
        }
        else{
            const value = newValue
            history('/shop/');
        }
    };

    return (
      <AppBar sx={{bgcolor:'transparent', boxShadow:'0', position:'sticky', backgroundImage:'background: rgb(2,0,36);\n' +
              'background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,12,1) 35%, rgba(0,212,255,1) 100%);'}}>
          {!isMatch ?
          <>
          { lang=='en' ?
              <>
          <Toolbar>
              <Box sx={{display:'flex',width:'100%',alignItems:'center', height:'100px'}}>
                <ApiIcon sx={{color:'white'}}/>
                  <Box>
                        <Tabs sx={{textDecoration:'none'}} onChange={TabHandler}>
                            {links.map((link,index)=>(<Tab  label={link} key={index} sx={{color:'white',fontWeight:'bold',textDecoration:'none',
                                ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}}/>))}
                        </Tabs>
                  </Box>
                  <Box display={'flex'} marginLeft={'auto'}>
                      <Button variant={'outlined'} sx={{marginRight:2, color:'white'}}>Contact Us</Button>
                      <Button variant={'contained'} sx={{marginLeft:2, marginRight:2}}>Reservation</Button>
                      <Box display={'flex'} flexDirection={'column'} sx={{marginRight:2, color:'white'}}>
                          <Button variant={'outlined'} sx={{height:'7px',width:'7px' ,margin:'auto'}} onClick={() => setLang('fa')}>fa</Button>
                          <Button variant={'contained'} sx={{height:'7px',width:'7px' ,margin:'auto'}} onClick={() => setLang('en')}>en</Button>
                      </Box>
                  </Box>
              </Box>
          </Toolbar>
              </>
          :
              <>
          <Toolbar sx={{display:'flex'}}>
              <Box display={'flex'} marginRight={'auto'}>
                  <Box display={'flex'} flexDirection={'column'} sx={{marginRight:2, color:'white'}}>
                      <Button variant={'outlined'} sx={{height:'7px',width:'7px' ,margin:'auto'}} onClick={() => setLang('fa')}>fa</Button>
                      <Button variant={'contained'} sx={{height:'7px',width:'7px' ,margin:'auto'}} onClick={() => setLang('en')}>en</Button>
                  </Box>
                  <Button variant={'contained'} sx={{marginRight:2, color:'white'}}>مشاوره</Button>
                  <Button variant={'outlined'} sx={{marginRight:2, color:'white'}}>تماس</Button>
              </Box>
              <Box sx={{display:'flex',width:'100%',alignItems:'center', height:'100px',justifyContent:"flex-end"}}>
                  <Box>
                      <Tabs sx={{textDecoration:'none'}} onChange={TabHandler}>
                          {reversedfalinks.map((link,index)=>(<Tab  label={link} key={index} sx={{fontWeight:'bold', fontSize:'20px',textDecoration:'none',
                              ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}}/>))}
                      </Tabs>
                  </Box>
                  <ApiIcon sx={{color:'black'}}/>
              </Box>
          </Toolbar>
              </>}
          </>
          :
              <>
                  { lang=='en' ?
              			<SwipeableTemporaryDrawer link={links} lang={lang}/>
                      :
                      	<SwipeableTemporaryDrawer link={falinks} lang={lang}/>
                  }
              </>}
      </AppBar>
    );
}

export default Header;