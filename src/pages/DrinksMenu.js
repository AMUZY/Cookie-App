import { NavLink } from "react-router-dom";
import "../App.scss";
import MenuTop from "../components/MenuTop"

export default function DrinkMenu() {
  return (
    <div className="flex flex-col align-center">
      {/* TITLE MENU */}
      <MenuTop />

      {/* COOKIES OR DRINKS */}
      <div className="flex justify-center items-center mt-10 sm:mt-40 md:mt-32">
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
      <div>
        
      </div>
    </div>
  );
}
