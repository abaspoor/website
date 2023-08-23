import React from 'react';
import { Box } from "@mui/material";
import { makeStyles} from "@mui/styles";
import LAYER1 from './LAYER1.png';
import LAYER2 from './LAYER2.png';

const mystyle = makeStyles(theme => ({
    animclass: {
        width: '600px',
        height: '300px',
        backgroundImage: `url(${LAYER2})`,
        backgroundSize:'cover',
        transition: '1s',
        '&:hover': {
            transform:'rotateY(180deg)',
            backgroundImage: `url(${LAYER1})`,
        },
    },
    myDIV: {
        width: '600px',
        height: '300px',
        backgroundImage: `url(${LAYER2})`,
        backgroundSize:'cover',
        '&:hover': {
            animation: '$mymove 2s',
        },
    },
    '@keyframes mymove': {
        '0%': {
            backgroundImage: `url(${LAYER2})`,
            transform: 'rotateY(0deg)',
        },
        '100%': {
            backgroundImage: `url(${LAYER1})`,
            transform: 'rotateY(180deg)',
        },
    },
}));

const VisitCard = () => {
    const classes = mystyle();
    return (
        <Box className={classes.animclass}>
        </Box>
    );
}

export default VisitCard;