import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Box, Grid} from "@mui/material";
import './mystyle.css';
import hill1 from './resources/hill1.png';
import hill2 from './resources/hill2.png';
import hill3 from './resources/hill3.png';
import hill4 from './resources/hill4.png';
import leaf from './resources/leaf.png';
import plant from './resources/plant.png';
import tree from './resources/tree.png';


gsap.registerPlugin(ScrollTrigger);

const Animatedjungle = () => {

    const mymain = useRef(null);
    const hill1Ref = useRef(null);
    const hill2Ref = useRef(null);
    const hill3Ref = useRef(null);
    const hill4Ref = useRef(null);
    const leafRef = useRef(null);
    const plantRef = useRef(null);
    const treeRef = useRef(null);


    useEffect(()=>{

        const mymainElement = mymain.current;
        const hill1Element = hill1Ref.current;
        const hill2Element = hill2Ref.current;
        const hill3Element = hill3Ref.current;
        const hill4Element = hill4Ref.current;
        const leafElement = leafRef.current;
        const plantElement = plantRef.current;
        const treeElement = treeRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: mymainElement,
                start: '100px 100px',
                end: '800px 250px',
                scrub: 3,
                pin: true,
                anticipatePin: 1,
                markers: true,
                onEnter: () => {
                    gsap.to(hill1Element, { y: 0, ease: 'power2.in' });
                    gsap.to(hill2Element, { x: 0, ease: 'power2.in' });
                    gsap.to(hill3Element, { x: 0, ease: 'power2.in' });
                    gsap.to(hill4Element, { x: 0, ease: 'power2.in' });
                    gsap.to(leafElement, { x: 0, ease: 'power2.in' },'+=5');
                    gsap.to(plantElement, { y: 0, ease: 'power2.in' },'+=5');
                    gsap.to(treeElement, { y: 0, ease: 'power2.in' },'+=1');
                },
                onLeaveBack: () => {
                    timeline.add([
                        gsap.to(hill1Element, { y: 250, ease: 'power2.out' }),
                        gsap.to(hill2Element, { x: '-15%', ease: 'power2.out' }),
                        gsap.to(hill3Element, { x: '+15%', ease: 'power2.out' }),
                        gsap.to(hill4Element, { x: '-10%', ease: 'power2.out' }),
                        gsap.to(leafElement, { x: '+5%', ease: 'power2.out' },'+=5'),
                        gsap.to(plantElement, { y: 50, ease: 'power2.out' },'+=5'),
                        gsap.to(treeElement, { y: 150, ease: 'power2.out' },'+=1'),
                    ]);
                },
            },
        });

        timeline.add([
            gsap.to(hill1Element, { y: 250, ease: 'power2.out' }),
            gsap.to(hill2Element, { x: '-15%', ease: 'power2.out' }),
            gsap.to(hill3Element, { x: '+15%', ease: 'power2.out' }),
            gsap.to(hill4Element, { x: '-10%', ease: 'power2.out' }),
            gsap.to(leafElement, { x: '+5%', ease: 'power2.out' },'+=5'),
            gsap.to(plantElement, { y: 50, ease: 'power2.out' },'+=5'),
            gsap.to(treeElement, { y: 150, ease: 'power2.out' },'+=1'),
        ]);

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <>
        <Box ref={mymain} sx={{width:'100%',height:'780px', bgcolor:'transparent',position:'absolute'}}></Box>
    <div className={'main'}>
            <img src={hill1} alt="img1" className={'hill1'} ref={hill1Ref}/>
            <img src={hill2} alt="img2" className={'hill2'} ref={hill2Ref}/>
            <img src={hill3} alt="img3" className={'hill3'} ref={hill3Ref}/>
            <img src={hill4} alt="img4" className={'hill4'} ref={hill4Ref}/>
            <img src={leaf} alt="leaf" className={'leaf'} ref={leafRef}/>
            <img src={plant} alt="plant" className={'plant'} ref={plantRef}/>
            <img src={tree} alt="tree" className={'tree'} ref={treeRef}/>
        </div>
    <Box sx={{width:'100%',height:'1000px', backgroundImage:'background: rgb(0,66,53);\n' +
            'background: linear-gradient(90deg, rgba(0,66,53,1) 0%, rgba(0,51,41,1) 100%);',position:'absolute',zIndex:'10',marginTop:'700px'}}></Box>
        </>);
}

export default Animatedjungle;