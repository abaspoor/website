import React,{useState} from 'react';
import {Box, Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";



const Marketitem = ({title,description,img,swap}) => {

    const muiTheme = useTheme();
    const isMatch = useMediaQuery(muiTheme.breakpoints.down('sm'));

    return (
        <>
        {!isMatch ?
                <>
        <Box padding={10} justifyContent={'space-between'} alignItems={'center'} display={'flex'} bgcolor={!swap&&'#b2f7f7'}>
                <Grid display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} dir={swap ? 'ltr' : 'rtl'} maxHeight={'inherit'}>
                    <Grid sm={12} md={8} minWidth={'50%'}>
                        <Typography color={'$734950'} padding={0} variant={'h3'}>
                            {title}
                        </Typography>
                        <Typography variant={'caption'} padding={0}>{description}</Typography>
                        <Button variant={'outlined'}>اضافه به سبد خرید</Button>
                    </Grid>
                    <Grid sm={12} xl={4}>
                    <img src={img} alt={title} loading={'lazy'} width={'100%'} height={'auto'} style={{boxShadow:'10px 10px 20px #b2f7f7', borderRadius:20}}/>
                    </Grid>
                </Grid>
        </Box>
                </>
        :
        <h1>hello</h1>
        }
        </>
    );
}

export default Marketitem;