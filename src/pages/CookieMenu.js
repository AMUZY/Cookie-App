import { NavLink } from "react-router-dom";
import "../App.scss";
import MenuTop from "../components/MenuTop";
import AddtoCartBtn from "../components/AddtoCartBtn";

function c_d() {
  return "grotesk text-black font-base font-300 text-center";
}

export default function CookieMenu() {
  return (
    <div className="flex flex-col align-center">
      {/* TITLE MENU */}
      <MenuTop />

      {/* COOKIES OR DRINKS */}
      <div className="flex justify-center items-center mt-16 sm:mt-40 md:mt-32">
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
      <div className="c_gallery flex flex-row justify-start mt-10">
        <div>
          <div>
            <img src="pictures/DCC.png" alt="cookie images" />
          </div>{" "}
          <p> Double Chocolate Cookies </p> <h3> $4000 </h3>
          <AddtoCartBtn />
        </div>
        <div>
          {" "}
          <div>
            <img src="pictures/BC.png" alt="cookie images" />
          </div>{" "}
          <p> Butter Cookies </p> <h3> $3000 </h3>{" "}
          <button className="add">
            <p> ADD TO CART </p>
          </button>{" "}
        </div>
        <div>
          {" "}
          <div>
            <img src="pictures/VC.png" alt="cookie images" />
          </div>{" "}
          <p> Vanilla Cookies </p> <h3> $2500 </h3>{" "}
          <button className="add">
            <p> ADD TO CART </p>
          </button>{" "}
        </div>
        <div>
          {" "}
          <div>
            <img src="pictures/CC.png" alt="cookie images" />
          </div>{" "}
          <p> Chocolate Cookies </p> <h3> $3500 </h3>{" "}
          <button className="add">
            <p> ADD TO CART </p>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
