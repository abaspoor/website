import './App.css';
import Header from './components/Header/Header';
import Marketitem from "./components/Market/marketitem";
import React from "react";
import Market from "./components/Market/market";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./layout/main";
const linksArray = ['Products','Services','Overview','Contact Us'];
const linksArrayFa = ['محصولات','خدمات','درباره ما','تماس با ما'];
function App() {
  return (
    <div>
        <Router>
            <Main/>
        </Router>
    </div>
  );
}

export default App;
