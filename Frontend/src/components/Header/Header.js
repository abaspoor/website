import React from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';

const links = ["Services","Gallery","About Us"];
const falinks=["درباره ما","گالری","فروشگاه"];
const lang = 'fa';
const Header = () => {


    const history = useNavigate();
    const TabHandler = (event, newValue) => {
        if(lang=='fa'){console.log(falinks.length - newValue-1);}
        else{console.log(newValue);}
        if(newValue==2){
            history('/shop/');
        }
    };

    return (
      <AppBar sx={{bgcolor:'transparent', boxShadow:'0', position:'relative'}}>
          { lang=='en' ?
              <>
          <Toolbar>
              <Box sx={{display:'flex',width:'100%',alignItems:'center'}}>
                <ApiIcon sx={{color:'black'}}/>
                  <Box>
                        <Tabs sx={{textDecoration:'none'}} onChange={TabHandler}>
                            {links.map((link,index)=>(<Tab  label={link} key={index} sx={{fontWeight:'bold',textDecoration:'none',
                                ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}}/>))}
                        </Tabs>
                  </Box>
                  <Box display={'flex'} marginLeft={'auto'}>
                      <Button variant={'outlined'} sx={{marginRight:2}}>Contact Us</Button>
                      <Button variant={'contained'} sx={{marginLeft:2}}>Reservation</Button>
                  </Box>
              </Box>
          </Toolbar>
              </>
          :
              <>
          <Toolbar sx={{display:'flex',flexDirection:'row'}}>
              <Box display={'flex'} marginRight={'auto'}>
                  <Button variant={'contained'} sx={{marginRight:2 , width:'90px'}}>مشاوره</Button>
                  <Button variant={'outlined'} sx={{marginLeft:2, width:'90px'}}>تماس با ما</Button>
              </Box>
              <Box sx={{display:'flex',width:'100%',alignItems:'center', marginLeft:'auto',justifyContent:"flex-end"}}>
                  <Box>
                      <Tabs sx={{textDecoration:'none'}} onChange={TabHandler}>
                          {falinks.map((link,index)=>(<Tab  label={link} key={index} sx={{fontWeight:'bold', fontSize:'20px',textDecoration:'none',
                              ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}}/>))}
                      </Tabs>
                  </Box>
                  <ApiIcon sx={{color:'black'}}/>
              </Box>
          </Toolbar>
              </>}
          <Box width={"100%"} height={"50vh"}>
              <video src="/label.mp4" width={'100%'} height={'70%'} autoPlay loop muted playsInline></video>
              <Box display={'flex'} width={'100%'}>
                  <Typography margin={'auto'} variant={'h4'} color={'black'} textAlign={'center'}>آموزش فن بیان با جدیدترین متدهای دنیا</Typography>
              </Box>
          </Box>
      </AppBar>
    );
}

export default Header;