import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Firstlay from "./firstlay";
import Market from "../components/Market/market";
import Gallery from "../components/Gallery/gallery";

function Main(){
    return(
        <div className="main">
            <Routes >
                <Route exact path="/" Component={Firstlay}/>
                <Route path="/services" Component={Market}/>
                <Route path="/gallery" Component={Gallery}/>
                {/*<Route path="/aboutus" Component={Aboutus}/>*/}
            </Routes >
        </div>
    );
}

export default Main;