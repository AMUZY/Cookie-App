import { useLocation } from "react-router-dom";


function Hbutton(props) {

  let link = useLocation();

  function white(){
    if((link.pathname === "/cookie-menu") || (link.pathname === "/drinks-menu")){
      return (
        "text-white"
      );
    }
    else {
      return (
        "text-black"
      );
    }
  }

  function svgCol(){
    if((link.pathname === "/cookie-menu") || (link.pathname === "/drinks-menu")){
      return (
        "#ffffff"
      );
    }
    else {
      return (
        "#000000"
      );
    }
  }



  return (
    <button className="w-20 h-5 font text-base color:white text-white flex justify-end md:justify-center md:flex-row">
      <div className="flex items-center mx-0 md:block">
        <svg className = "w-full h-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                stroke={svgCol()}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                stroke={svgCol()}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                stroke={svgCol()}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 8H21"
                stroke={svgCol()}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
      </div>
      <h2 className={"hidden hover:underline px-1 text-base md:inline-block " + white()}>
        {props.text}
      </h2>
    </button>
  );
}

export default Hbutton;
