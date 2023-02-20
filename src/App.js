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
import { useReducer,useState } from "react";
import CartItem from "./components/CartItem";
import { v4 as uuidv4 } from "uuid";

// Hooks and Resources import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [store, setStore] = useState([]);

  function GiveStore(obj) {
    
    const obj2 = {
      item : obj.item,
      num : obj.num,
      src : obj.src,
      name : obj.name,
      price : obj.price,
    }
    
    store.map((element)=>{
      if(element.item === obj2.item){
        alert("item already in cart")
      }
      return true;
    })
    
    setStore([...store, obj2]);
      
    for(let i = 0 ; i < store.length ; i++){
      if(obj){
        for(let i = 0 ; i < store.length ; i++){
          if(store[i].item === obj.item){
            
            setStore(store);
          }
        }
        // setStore(store);
      }
      else{
        // setNum(0);
        setStore([...store, obj2]);
      }
    }
    
  }

  // Function to make store state to update to effect the item removal from cart
  const [ignored, eUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    eUpdate();
  }

  // The function to REMOVE item from cart (passed as props to cartItem)
  function DelItem(som){
    for(let i = 0 ; i < store.length ; i++){
      if(store[i].item === som){
        store.splice(i , 1);
        handleClick()
        console.log(ignored);
      }
    }
  }


  const [cart, setCart] = useState(
    "cart absolute bottom-0 -right-full top-0 w-full md:w-1/2"
  );
  const [blur, setBlur] = useState(
    "absolute blurbox bottom-0 -right-0 top-0 w-full z-[-1]"
  );

  function Animate() {
    // ON CLICK CART BUTTON TO OPEN
    setCart("cart absolute bottom-0 top-0 right-0 w-full md:w-[45%] z-[2]");
    setBlur("absolute blurbox bottom-0 -right-0 top-0 w-full z-[1]");
  }

  function UnAnimate() {
    // ON CLICK X TO CLOSE
    setCart("cart absolute bottom-0 -right-full top-0 w-full md:w-1/2 z-[2]");
    setBlur("hidden absolute blurbox bottom-0 -right-0 top-0 w-full z-[-1]");
  }


  return (
    <div className="App min-h-[100vh] navbarCrown relative overflow-hidden">
      <Router>
        <NavBar Animate = {Animate} />
        {/* CART DIV */}
        <div className={"px-[10%] md:px-[5%] h-full " + cart}>
          {/* YOUR CART AND CLOSE BUTTON X DIV */}
          <div className="flex justify-between my-6 md:my-8">
            <h2 className="font-medium text-md md:text-xl "> {"YOUR CART(" + store.length + ")"} </h2>
            <button
              onClick={() => {
                UnAnimate();
              }}
            >
              <img alt="X button" src="SVG FILES/x-button.svg" />
            </button>
          </div>
          <div className="h-[80%] overflow-y-scroll">
              {/* CART ITEMS */}
            <div>
              {
                store.map((item) => {
                    return (
                    <CartItem key = {uuidv4()}  DelItem = {DelItem} item = {item.item} src = {item.src} name = {item.name} price = {item.price} />
                  )
                }
                  )
              }
            </div>
          </div>
        </div>

        {/* THE BLUR BOX */}
        <div className={blur}> </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/cookie-menu"
            element={<CookieMenu GiveStore={GiveStore} />}
          />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/drinks-menu" element={<DrinkMenu GiveStore = {GiveStore} />} />
        </Routes>
      </Router>
    </div>
  );
}
