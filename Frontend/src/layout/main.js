import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Firstlay from "./firstlay";
import Secondlay from "./secondlay";

function Main(){
    return(
        <div className="main">
            <Routes >
                <Route exact path="/" Component={Firstlay}/>
                <Route path="/shop" Component={Secondlay}/>
            </Routes >
        </div>
    );
}

export default Main;