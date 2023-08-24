import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import png from '../Market/product.png';

const Galleryitem = ({color}) => {
    return (
        <Box padding={5} display={'flex'} alignItems={'self-end'}  bgcolor={'#f7d5ff'} dir={'rtl'}>
            <Grid display={'flex'} flexDirection={'row'} justifyItems={'flex-end'} maxHeight={'inherit'}>
                <Grid md={6}>
                    <img src={png} alt='title' loading={'lazy'} width={'100%'} height={'auto'} style={{boxShadow:('10px 10px 20px 20px #f7d5ff'),
                        borderRadius:20, float:'right'}}/>
                </Grid>
                <Grid md={6} marginRight={'50px'}>
                    <Typography color={'$734950'} padding={0} variant={'h3'} marginRigth={'50px'} dir={'rtl'}>
                        در مورد کسشیمتناشس منتابت نسیب نتماخهعتشست .شنب دتمشسیبنتاشسیشس ی شسی سش یت ایشسمتنای تنشساینمسشایشستما
                    </Typography>
                    <Typography variant={'caption'} padding={0}>descriptions</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Galleryitem;