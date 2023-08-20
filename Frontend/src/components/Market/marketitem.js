import React,{useState} from 'react';
import {Box, Button, Typography} from "@mui/material";



const Marketitem = ({title,description,img,swap}) => {
    return (

        <Box padding={10} justifyContent={'space-between'} alignItems={'right'} display={'flex'} bgcolor={!swap&&'#b2f7f7'}>
            {swap ?  <>
                    <Box>
                        <Typography color={'$734950'} padding={3} variant={'h3'}>
                            {title}
                        </Typography>
                        <Typography variant={'caption'} padding={3}>{description}</Typography>
                        <Button variant={'outlined'}>اضافه به سبد خرید</Button>
                    </Box>
                    <img src={img} alt={title} loading={'lazy'} width={'30%'} style={{boxShadow:'10px 10px 20px #b2f7f7', borderRadius:20}} height={'300px'}/></>
            :
    <>
        <img src={img} alt={title} loading={'lazy'} width={'30%'} style={{boxShadow:'10px 10px 20px #ccc', borderRadius:20,}} height={'300px'}/>
        <Box>
            <Typography color={'$734950'} padding={3} variant={'h3'}>
                {title}
            </Typography>
            <Button variant={'outlined'}>اضافه به سبد خرید</Button>
            <Typography variant={'caption'} padding={3}>{description}</Typography>

        </Box></>
   }
        </Box>
    );
}

export default Marketitem;