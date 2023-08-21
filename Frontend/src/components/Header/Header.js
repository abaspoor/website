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
            history('/shop/');
        }
    };

    return (
      <AppBar sx={{height:'100px',bgcolor:'transparent', boxShadow:'0', position:'sticky', backgroundImage:'background: rgb(247,213,255);\n' +
              'background: linear-gradient(90deg, rgba(247,213,255,1) 0%, rgba(178,247,247,1) 100%);'}}>
          {!isMatch ?
          <>
          { lang=='en' ?
              <>
          <Toolbar>
              <Box sx={{display:'flex',width:'100%',alignItems:'center', height:'100px'}}>
                <ApiIcon sx={{color:'white'}}/>
                  <Box>
                        <Tabs sx={{textDecoration:'none'}} >
                            {links.map((link,index)=>(<Tab  label={link} key={index} sx={{color:'white',fontWeight:'bold',textDecoration:'none',
                                ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}} onClick={(event)=>{TabHandler(event,index)}}/>))}
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
                          {reversedfalinks.map((link,index)=>(<Tab  label={link} key={index} sx={{color:'white',fontWeight:'bold', fontSize:'20px',textDecoration:'none',
                              ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}}/>))}
                      </Tabs>
                  </Box>
                  <ApiIcon sx={{color:'white'}}/>
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