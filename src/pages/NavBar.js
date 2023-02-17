import { NavLink } from "react-router-dom";
import Hbutton from "../components/Hbutton";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import "../App.scss";
import { useLocation } from "react-router-dom";


export default function NavBar(props) {
  const navLinks = [
    { name: "Home", href: "/home-page" },
    { name: "Menu", href: "/cookie-menu"},
    // {name : "Drinks", href: "/drinks-menu"},
    { name: "Recipes", href: "/recipes" },
    { name: "About", href: "/about" },
  ];

  let link = useLocation();


  // This function returns the objects from the navLinks array
  function navlinks(name, href) {
    let item = {
      name: name,
      href: href,
    };
    return (
      <NavLink
        to={item.href}
        // This className gives white or red styles to the active nav link
        className={({ isActive }) => {
          if ((isActive)) {
            console.log(item.name);
            return "grotesk flex items-center text-lg text-red-600 font-bold md:text-xl";
          } 
          else {
            return "grotesk flex items-center text-sm md:text-lg " + white();
          }
        }}
      >
        {/* New h2 tag only on drinks-menu page */}
        {()=>
          {
            if(link.pathname === "/drinks-menu"){
              if(item.name === "Home"){
                return(
                  <h2 className = {"grotesk text-sm md:text-lg " + white()}>{item.name}</h2>
                )
              }
              if(item.name === "Menu"){
                return(
                  <h2 className = "grotesk text-red-600 text-lg font-bold md:text-xl">{item.name}</h2>
                );
              }
              if(item.name === "Recipes"){
                return(
                  <h2 className = {"grotesk text-sm md:text-lg " + white()}>{item.name}</h2>
                )
              }
              if(item.name === "About"){
                return(
                  <h2 className = {"grotesk text-sm md:text-lg " + white()}>{item.name}</h2>
                )
              }
          }
          else{
            return(
              item.name
            )
          }
          }
        }
      </NavLink>
    );
  }


  // This function checks for the cookie and drink url and give the NavBar the stated background picture
  function checkUrl() {
    if (link.pathname === "/cookie-menu" || link.pathname === "/drinks-menu") {
      return "navbarCookie";
    } else {
      return "navbarCrown";
    }
  }

  // This function makes the nav links text white
  function white() {
    if (link.pathname === "/cookie-menu" || link.pathname === "/drinks-menu") {
      return "text-white border-white";
    } else {
      return "text-black border-red-600";
    }
  }

  return (
    <div className={checkUrl()}>
      <section id="top">
        <div className="flex justify-between items-center pt-2 mx-5 mb-2 md:justify-between">
          <h1
            className={
              "script font-sans mr-52 not-italic font-bold text-md md:text-3xl md:mr-0 " +
              white()
            }
          >
            Creamy Creations
          </h1>
          <ul className="hidden w-80 mr-[130px] h-5 p-0 flex justify-between list-none md:flex">
            {navLinks.map((navlink) => {
              return (
                <li className="hover:underline flex items-center" key={uuidv4()}>
                  {navlinks(navlink.name, navlink.href)}
                </li>
              );
            })}
          </ul>
          <Hbutton text="Cart" className={white()} />
        </div>
        {/* Nav LInk Red Border Bar */}
        <div
          className={"mx-5 my-2 py-1 border-2 md:hidden rounded-md " + white()}
        >
          <ul className="flex justify-around items-center list-none text-red-600">
            {navLinks.map((navlink) => {
              return (
                <li className="hover:underline" key={uuidv4()}>
                  {navlinks(navlink.name, navlink.href)}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {props.children}
    </div>
  );
}
