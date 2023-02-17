// Directory imports
import "./input.css";
import "./App.scss";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import CookieMenu from "./pages/CookieMenu";
import DrinkMenu from "./pages/DrinksMenu";
import React from "react";

// Hooks and Resources import
import {BrowserRouter as Router,
Routes,
Route,
} 
from "react-router-dom";


export default function App (){
  return (
    <div className = "App h-screen">
        <Router>
            <NavBar>
              <Routes>
                <Route path = "/home-page" element = {<HomePage />} />
                <Route path = "/cookie-menu" element = {<CookieMenu />} />
                <Route path = "/recipes" element = {<Recipes />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/drinks-menu" element = {<DrinkMenu />} />
              </Routes>
            </NavBar>
        </Router>
    </div>
  )
}