// Directory imports
import "./input.css";
import "./App.scss";
import "./button.scss"
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import CookieMenu from "./pages/CookieMenu";
import DrinkMenu from "./pages/DrinksMenu";
import { useReducer, useState } from "react";
import CartItem from "./components/CartItem";
import { v4 as uuidv4 } from "uuid";

// Hooks and Resources import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [store, setStore] = useState([]);

  // Function to make store state to update to effect the item removal from cart
  const [ignored, eUpdate] = useReducer((x) => x + 1, 0);
  console.log(ignored);

  const cards = [
    {item : 1 , num : 1,  src : "pictures/Double.png", name : "Double Chocolate", symbol: "₦", price : 4000},
    {item : 2 , num : 1,  src : "pictures/Danish.png", name : "Danish Butter", symbol: "₦", price : 3000},
    {item : 3 , num : 1,  src : "pictures/Coconut.png", name : "Coconut", symbol: "₦", price : 2500},
    {item : 4 , num : 1,  src : "pictures/Chocolate.png", name : "Chocolate Chips", symbol: "₦", price : 3500},
    {item : 5, num : 1, src : "pictures/milk.png", name : "Milk", symbol: "₦", price : 350},
    {item : 6, num : 1, src : "pictures/choco.png", name : "Chocolate Drink", symbol: "₦", price : 200},
    {item : 7, num : 1, src : "pictures/smoothie.png", name : "Smoothie", symbol: "₦", price : 350},
    {item : 8, num : 1, src : "pictures/yoghurt.png", name : "Yoghurt", symbol: "₦", price : 300},
  ]


  // The function to REMOVE item from cart (passed as props to cartItem)
  function DelItem(som) {
    for (let i = 0; i < store.length; i++) {
      if (store[i].item === som) {
        store.splice(i, 1);
        eUpdate();
      }
    }
  }
  
  // num is going to come from num and item is going to come from props.item in CARTITEM !!!!!!!!!!

  function CreateUser(num, item, price) {
    const userSample = {
      item: item,
      num: num + 1,
      price : price,
    };

    
    for (let i = 0; i < store.length; i++) {
      if (store[i].item === userSample.item) {
        if(store[i].num === 10){
          alert("YOU WAN BUY ALL THE WHOLE MARKET NI???")
        }
        else{
          store[i].num = store[i].num + 1;
          cards.map((element)=>{
            if(element.item === store[i].item){
              store[i].price = store[i].price + element.price;
            }
            return true;
          })
          console.log(price);
        }
 
      }
    }
      // Function Call to refresh component
      eUpdate();
  }


  function DelUser(num, item, price) {
    const userSample = {
      item: item,
      num: num - 1,
      price : price,
    };

   
    for (let i = 0; i < store.length; i++) {
      if (store[i].item === userSample.item) {
        if(store[i].num > 1){
          store[i].num = store[i].num - 1;
          cards.map((element)=>{
            if(element.item === store[i].item){
              store[i].price = store[i].price - element.price;
            }
            return true;
          })
          console.log(price)
        }
        else{
          alert("minimum number reached")
        }

      }  
      
    }
 
    // Function Call to refresh component
    eUpdate();
  }


  function RetPrice(item) {
    for(let i = 0; i < store.length ; i++){
      if(store[i].item === item){
        return store[i].price;
      } 
      
    }
    
  }


  function PullNum(item) {
    for (let i = 0; i < store.length; i++) {
      if (store[i].item === item) {
        return store[i].num;
      }
    }
  }


  // DELIVERY
  

  function RetDelFee(){
    let delfee;
    if(store.length === 0){
      delfee = 0;
    }
    else if(store.length > 0){
      delfee = 800;
    }
    return delfee;
  }
  var SubTotal = 0;
  function SubTotalPrice(){
    // if(store.length >= 2){
    //   for(let i = 0; i < 80 ; i++){
    //     add = add + store[i].num;
    //   }
    //   console.log(add);
    //   for(let i = 0; i < add ; i++){
    //     Total = Total + store[i].price; 
    //   }
    //   return Total;
    // }
    store.map((element)=>{
      SubTotal = SubTotal + element.price;
      return true;
    })
    return SubTotal;
  }

  function TotalPrice(){
    var Total = SubTotal + RetDelFee();
    return Total;
  }
  

  // Function Givestore
  function GiveStore(obj) {
    const obj2 = {
      item: obj.item,
      num: obj.num,
      src: obj.src,
      name: obj.name,
      price: obj.price,
    };

    setStore([...store, obj2]);
    
    // finalsubT.push(obj2.price);

    store.map((element) => {
      if (element.item === obj2.item) {
        alert("item already in cart");
        // finalsubT.pop();
        // console.log(finalsubT);
      }
      return true;
    });

    for (let i = 0; i < store.length; i++) {
      if (obj) {
        for (let i = 0; i < store.length; i++) {
          if (store[i].item === obj.item) {
            setStore(store);
          }
        }
        // setStore(store);
      } else {
        setStore([...store, obj2]);
      }
    }
  }


  
  // Code to Add up the all the prices and give back the sum
  // let allsum = 0;
  // if (finalsubT.length > 0) {
  //   allsum = finalsubT.reduce(function (a, b) {
  //     return a + b;
  //   });
  //   // handleClick();
  // }


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
        <NavBar Animate={Animate} />
        {/* CART DIV */}
        <div className={"px-[10%] md:px-[5%] h-screen overflow-y-scroll " + cart}>
          {/* YOUR CART AND CLOSE BUTTON X DIV */}
          <div className="flex justify-between my-6 md:my-8">
            <h2 className="font-medium text-md md:text-xl ">
              {" "}
              {"YOUR CART(" + store.length + ")"}{" "}
            </h2>
            <button
              onClick={() => {
                UnAnimate();
              }}
            >
              <img alt="X button" src="SVG FILES/x-button.svg" />
            </button>
          </div>
          <div className="h-[70%] overflow-y-scroll">
            {/* CART ITEMS */}
            <div>
              {store.map((item) => {
                return (
                  <CartItem
                    key={uuidv4()}
                    // SubTotal={SubTotal}
                    RetPrice = {RetPrice}
                    CreateUser={CreateUser}
                    DelUser={DelUser}
                    // RemPrice={RemPrice}
                    DelItem={DelItem}
                    PullNum={PullNum}
                    item={item.item}
                    src={item.src}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
          {/* TOTLA AMOUNT DIV */}
          <div className="h-max flex flex-col">
            {/* AMOUT DIV */}
            <div className="h-max py-3 my-3 border-t-[2px] border-b-[2px] border-black">
              <div className="w-full xl:w-1/2 flex justify-between">
                {/* TOTAL NO OF ITEMS DIV */}
                <div>
                  <h3 className="noofitems">TOTAL NO OF ITEMS</h3>
                  <h3 className="noofitems">SUB-TOTAL</h3>
                  <h3 className="noofitems">DELIVERY FEE</h3>
                  <h3 className="noofitems">TOTAL</h3>
                </div>
                {/* AMOUNT FIGURES DIV */}
                <div>
                  {/* TOTAL NO OF ITEMS */}
                  <h3 className="priceofitems">{store.length}</h3>
                  {/* SUB TOTAL */}
                  <h3 className="priceofitems">{"₦" + SubTotalPrice()}</h3>
                  {/* DELIVERY FEE */}
                  <h3 className="priceofitems">{"₦" + RetDelFee()}</h3>
                  <h3 className="priceofitems font-bold">{"₦" + TotalPrice()}</h3>
                </div>
              </div>
            </div>

            {/* WE ACCEPT DIV */}
            <div className="h-[50%] mt-5 flex justify-between">
              <div className="w-[50%] mr-5 flex justify-between items-center">
                <h3 className="text-center text-[10px] xl:text-lg"> We accept: </h3>
                <img className = "payment ml-2" src = "SVG FILES/Mastercard.svg" alt = "mastercard" />
                <img className = "payment" src = "SVG FILES/Visa.svg" alt = "visacard" />
                <img className = "payment" src = "SVG FILES/PayPal.svg" alt = "paypal" />
                <img className = "payment" src = "SVG FILES/Payoneer.svg" alt = "payoneer" />
              </div>
              <button className="proceedbtn">
                <p className="h-full px-5 w-full flex justify-center items-center rounded-md text-white text-[10px] lg:text-md xl:text-lg"> PROCEED TO CHECKOUT </p>
              </button>
            </div>
            {/* PAYMENTS ARE SAFE AND SECURE */}
            <div className="h-3 mb-10 flex items-center">
              <img src = "SVG FILES/lock-closed.svg" className="h-full" alt = "lock icon" />
              <h3 className="text-[10px] text-xs font-medium text-gray-600 md:text-sm" > Payments are safe and secure</h3>
            </div>
            
          </div>
        </div>

        {/* THE BLUR BOX */}
        <button onClick = {()=>{UnAnimate();}} className={blur}> </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/cookie-menu"
            element={<CookieMenu GiveStore={GiveStore} />}
          />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/drinks-menu"
            element={<DrinkMenu GiveStore={GiveStore} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
