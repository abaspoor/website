import React,{useState} from 'react';
import {Box, Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";



const Marketitem = ({title,description,img,swap}) => {

    const muiTheme = useTheme();
    const isMatch = useMediaQuery(muiTheme.breakpoints.down('sm'));

    return (
        <>
        {!isMatch ?
                <>
		<Grid>
        <Box padding={10} justifyContent={'space-between'} alignItems={'right'} display={'flex'} bgcolor={!swap&&'#b2f7f7'}>
            {swap ?  <>
                <Grid display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} dir={'ltr'}>
                    <Grid sm={12} md={8} marginRight={10} minWidth={'50%'}>
                        <Typography color={'$734950'} padding={0} variant={'h3'}>
                            {title}
                        </Typography>
                        <Typography variant={'caption'} padding={0}>{description}</Typography>
                        <Button variant={'outlined'}>اضافه به سبد خرید</Button>
                    </Grid>
                    <Grid sm={12} xl={4}>
                    <img src={img} alt={title} loading={'lazy'} width={'100%'} style={{boxShadow:'10px 10px 20px #b2f7f7', borderRadius:20}} height={'auto'}/>
                    </Grid>
                </Grid>
                    </>
                    :
    <>
        <Grid display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} dir={'rtl'}>
            <Grid sm={12} md={8} marginLeft={10} minWidth={'50%'}>
                <Typography color={'$734950'} padding={0} variant={'h3'}>
                    {title}
                </Typography>
                <Typography variant={'caption'} padding={0}>{description}</Typography>
                <Button variant={'outlined'}>اضافه به سبد خرید</Button>
            </Grid>
            <Grid sm={12} xl={4}>
                <img src={img} alt={title} loading={'lazy'} width={'100%'} style={{boxShadow:'10px 10px 20px #b2f7f7', borderRadius:20}} height={'auto'}/>
            </Grid>
        </Grid>
            </>
   }
        </Box>
        </Grid>
                </>
        :
        <h1>hello</h1>
        }
        </>
    );
}

export default Marketitem;