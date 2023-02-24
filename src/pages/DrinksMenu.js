import { NavLink } from "react-router-dom";
import "../App.scss";
import CookieCard from "../components/CookieCard";
import {v4 as uuidv4} from "uuid";


export default function DrinkMenu(props) {
  const cards = [
    {item : 5, num : 1, src : "pictures/milk.png", name : "Milk", symbol: "₦", price : 350},
    {item : 6, num : 1, src : "pictures/choco.png", name : "Chocolate Drink", symbol: "₦", price : 200},
    {item : 7, num : 1, src : "pictures/smoothie.png", name : "Smoothie", symbol: "₦", price : 350},
    {item : 8, num : 1, src : "pictures/yoghurt.png", name : "Yoghurt", symbol: "₦", price : 300},
  ]

  function AddtoCart(item ,num , src, name , price){
    
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
          className="grotesk flex items-center text-black text-sm font-base text-center mr-2 "
        >
          COOKIES
        </NavLink>
        <NavLink
          id="drinksbtn"
          to="/drinks-menu"
          className="grotesk flex items-center text-black text-lg font-bold text-center ml-2 md:text-2xl "
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
