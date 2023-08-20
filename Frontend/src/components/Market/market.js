import React from 'react';
import Marketitem from "./marketitem";
import {Box} from "@mui/material";
import pn from './product.png';

const contentArray = [{title:'Item Number 1', description:'THis is Item Number 1 to buy', img:pn},{title:'Item Number 2', description:'THis is Item Number 2 to buy', img:pn},{title:'Item Number 3', description:'THis is Item Number 3 to buy', img:pn}]
const Market = () => {
    return (
        <Box bgcolor={'#fbf2f2'} display={'flex'} justifyContent={'center'} flexDirection={'column'} width={'100%'} height={'10%'} position={'relative'}>
            {contentArray.map((cont,index) =>(<Marketitem title={cont.title} description={cont.description} img={cont.img} key={index} swap={index%2==0}/>))}
        </Box>
    );
}

export default Market;