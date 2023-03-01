import { NavLink } from "react-router-dom";
import "../App.scss";
import CookieCard from "../components/CookieCard";
import {v4 as uuidv4} from "uuid";

import cookie1 from "../pictures/Double.jpg"
import cookie2 from "../pictures/Danish.jpg"
import cookie3 from "../pictures/Coconut.jpg"
import cookie4 from "../pictures/Chocolate.jpg"




export default function CookieMenu(props) {

  const cards = [
    {item : 1 , num : 1,  src : cookie1, name : "Double Chocolate", symbol: "₦", price : 4000},
    {item : 2 , num : 1,  src : cookie2, name : "Danish Butter", symbol: "₦", price : 3000},
    {item : 3 , num : 1,  src : cookie3, name : "Coconut", symbol: "₦", price : 2500},
    {item : 4 , num : 1,  src : cookie4, name : "Chocolate Chips", symbol: "₦", price : 3500},
  ]
  
  
  function AddtoCart(item , num,  src, name , price){
    
    const cartobj = {
      item : item,
      num : num,
      src : src,
      name : name,
      price : price,
    }
    
    props.GiveStore(cartobj)
  }
  
  


  return (
    <div className="navbarCrown flex flex-col content-center">
      {/* COOKIES OR DRINKS */}
      <div className="flex justify-center items-center mt-8 sm:mt-16">
        <NavLink
          id="cookiebtn"
          to="/cookie-menu"
          className="grotesk flex items-center text-black text-lg font-bold text-center mr-2 md:text-2xl "
        >
          COOKIES
        </NavLink>
        <NavLink
          id="drinksbtn"
          to="/drinks-menu"
          className="grotesk flex items-center text-black text-sm font-base text-center ml-2 "
        >
          DRINKS
        </NavLink>
      </div>
      {/* COOKIE GALLERY */}
      <div className="c_gallery mx-5 grid grid-cols-2 gap-4 xl:grid-cols-4 xl:mx-32"> 
        {
          cards.map((item)=>{
            return(
              <CookieCard AddtoCart = {AddtoCart}  key = {uuidv4()} num = {item.num} item={item.item} src = {item.src} name = {item.name} symbol = {item.symbol} price = {item.price}/>
            )
          })
        }  
      </div>
    </div>
  );
}
