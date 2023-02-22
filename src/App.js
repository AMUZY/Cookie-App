// Directory imports
import "./input.css";
import "./App.scss";
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
  const [eUpdate] = useReducer((x) => x + 1, 0);

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
  

  // // Function that adds a price when you press plus
  // function SubTotal(subT) {
  //   finalsubT.push(subT);
  // }

  // Function that removes a price when you press minus
  // function RemTotal(num, subT) {
  //   for (let i = 0; i < finalsubT.length; i++) {
  //     if (finalsubT[i] === subT && num !== 1) {
  //       finalsubT.splice(i, 1);
  //       break;
  //     }
  //   }
  // }

  // Function called to remove the price from the subtotal array when we click the Remove button
  // function RemPrice(subT) {
  //   for (let i = 0; i < finalsubT.length; i++) {
  //     if (finalsubT[i] === subT) {
  //       finalsubT.splice(i, 1);
  //       console.log(finalsubT);
  //       break;
  //     }
  //   }
  // }

  // CLASS TO STORE ITEM NO

  // Function to create users to get their item no in cart each
  // num is going to come from num and item is going to come from props.item in CARTITEM !!!!!!!!!!

  function CreateUser(num, item) {
    const userSample = {
      item: item,
      num: num + 1,
    };

    
    for (let i = 0; i < store.length; i++) {
      if(store[i].num < 10){
        if (store[i].item === userSample.item) {
          store[i].num = store[i].num + 1;
        }
        if(store[i].item === userSample.item && store[i].price >= cards[i].price){
          store[i].price = store[i].price + cards[i].price;
        }
      }
      else{
        alert("YOU WAN BUY ALL THE WHOLE MARKET???")
      }
 
    }
      // Function Call to refresh component
      eUpdate();
  }


  function DelUser(num, item) {
    const userSample = {
      item: item,
      num: num - 1,
    };

   
    for (let i = 0; i < store.length; i++) {
      if(store[i].num > 1){
        if (store[i].item === userSample.item) {
          store[i].num = store[i].num - 1;
        }
        if(store[i].item === userSample.item && store[i].price >= cards[i].price * 2){
          store[i].price = store[i].price - cards[i].price;
        }
      }
      else if(store[i].item === userSample.item && store[i].num === 1){
        alert("mimium number reached");
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
  let delfee = 1000;
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
    var Total = SubTotal + delfee;
    return Total;
  }
  
  // function to store item no

  // Function to sum all the prices in the array
  // function SumSubTotal(){
  //   if(finalsubT.length > 1){
  //     for(let i = 1 ; i <= finalsubT.length ; i++){
  //       allsum = (finalsubT[i] + finalsubT[i - 1]);
  //       console.log(allsum);
  //       return allsum;
  //     }
  //   }

  // }

  // useEffect(()=>{
  //   console.log("useEffect")
  // } , [store])

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
        <div className={"px-[10%] md:px-[5%] h-full overflow-y-scroll " + cart}>
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
            <div className="h-max py-3 my-3 border-t-[1px] border-b-[1px] border-gray-400">
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
                  <h3 className="priceofitems">{"₦" + delfee}</h3>
                  <h3 className="priceofitems font-bold">{"₦" + TotalPrice()}</h3>
                </div>
              </div>
            </div>

            {/* WE ACCEPT DIV */}
            <div className="h-[50%]"></div>
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
          <Route
            path="/drinks-menu"
            element={<DrinkMenu GiveStore={GiveStore} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
