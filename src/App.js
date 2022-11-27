import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const MyComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/*path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au-dessus*/}
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyComponent;
