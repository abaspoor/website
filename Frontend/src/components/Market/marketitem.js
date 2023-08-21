import React,{useState} from 'react';
import {Box, Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";



const Marketitem = ({title,description,img,swap}) => {

    const muiTheme = useTheme();
    const isMatch = useMediaQuery(muiTheme.breakpoints.down('sm'));

    return (
        <>
        {!isMatch ?
                <>
        <Box padding={10} justifyContent={'space-between'} alignItems={'center'} display={'flex'} bgcolor={swap ? '#f7d5ff' : '#b2f7f7'}>
                <Grid display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} dir={swap ? 'ltr' : 'rtl'} maxHeight={'inherit'}>
                    <Grid sm={12} md={8} minWidth={'50%'}>
                        <Typography color={'$734950'} padding={0} variant={'h3'}>
                            {title}
                        </Typography>
                        <Typography variant={'caption'} padding={0}>{description}</Typography>
                        <Button variant={'outlined'}>اضافه به سبد خرید</Button>
                    </Grid>
                    <Grid sm={12} xl={4}>
                    <img src={img} alt={title} loading={'lazy'} width={'100%'} height={'auto'} style={{boxShadow:(!swap ? '10px 10px 20px 20px #f7d5ff' : '10px 10px 20px 20px #b2f7f7'), borderRadius:20}}/>
                    </Grid>
                </Grid>
        </Box>
                </>
        :
        <>
        <Box justifyContent={'space-between'} alignItems={'center'} bgcolor={swap ? '#f7d5ff' : '#b2f7f7'}>
            <Grid display={'flex'} flexDirection={'row'} dir={swap ? 'ltr' : 'rtl'}>
                <Grid sm={6} display={'flex'} flexDirection={'column'} width={'50%'} alignItems={'center'}>
                    <img src={img} alt={title} loading={'lazy'} width={'60%'} height={'auto'} style={{margin:'10px',boxShadow:(!swap ? '5px 5px 10px 10px #f7d5ff' : '5px 5px 10px 10px #b2f7f7'), borderRadius:20}}/>
                    <Button variant={'outlined'} sx={{width:'auto',maxWidth:'40%',margin:'10px 10px 10px 10px', fontWeight:'bold', fontSize:'9px'}}>اضافه به سبد خرید</Button>
                </Grid>
                <Grid sm={6} margin={'10px'}>
                        <Typography color={'$734950'} padding={0} variant={'h6'} width={'100%'}>
                            {title}
                        </Typography>
                        <Typography variant={'caption'} padding={0}>{description}</Typography>

                </Grid>
            </Grid>
        </Box>
        </>
        }
        </>
    );
}

export default Marketitem;