import { useState } from "react";
import "../App.scss";

export default function CartItem(props) {
  const [num, setNum] = useState(1);

  function IncNum() {
    if (num === 10) {
      alert("YOU WAN BUY ALL THE MARKET NI???");
    }
    setNum(num + 1);
  }
  function DecNum() {
    if (num === 1) {
      alert("minimum number reached");
    } else {
      setNum(num - 1);
    }
  }

  return (
    <div className="py-4 h-28 flex border-b-[1px] border-gray-400 md:py-6 md:h-40">
      {/* IMAGE DIV */}
      <div className="w-[25%] sm:w-[13%] md:w-[15%] h-full">
        <img
          className="inline h-full mx-0"
          src={props.src}
          alt="The item in cart"
        />
      </div>
      {/* OTHERS DIV */}
      <div className="w-[75%] sm:w-[87%] md:w-[85%] flex justify-between">
        {/* NAME DIV */}
        <div className="w-[50%] mx-3 flex flex-col justify-between">
          {/* NAME */}
          <h3 className="grotesk text-xs font-medium md:text-base">
            {props.name}
          </h3>
          {/* INCREASE OR DECREASE BUTTON */}
          <div className="w-[60px] flex justify-between md:w-[70px]">
            <button
              className="increase"
              onClick={() => {
                DecNum(num);
              }}
            >
              <img
                src="SVG FILES/Negative-Sign.svg"
                className="mx-1 w-3 md:mx-1 md:w-3"
                alt="negative sign"
              />
            </button>
            <h3 className="text-xs font-medium"> {num} </h3>
            <button
              className="decrease"
              onClick={() => {
                IncNum(num);
              }}
            >
              <img
                src="SVG FILES/Plus-sign.svg"
                className="mx-1 w-3 md:mx-1 md:w-3"
                alt="plus sign"
              />
            </button>
          </div>
        </div>
        {/* REMOVE BUTTON DIV */}
        <div className="flex flex-col justify-between items-end">
          {/* REMOVE BUTTON */}
          <div>
            <button
              className="flex justify-center items-center"
              onClick={() => {
                props.DelItem(props.item);
              }}
            >
              <img
                src="SVG FILES/trash-bin-icon.svg"
                className="mx-1 h-2 md:mx-1 md:h-3"
                alt="the trashbin icon"
              />
              <h3 className="grotesk text-red-600 text-xs font-medium md:text-base">
                {" "}
                Remove{" "}
              </h3>
            </button>
          </div>
          {/* PRICE TAG */}
          <h3 className="text-xs font-bold">{"₦" + props.price * num}</h3>
        </div>
      </div>
    </div>
  );
}
