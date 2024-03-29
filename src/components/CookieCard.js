import "../App.scss";
import "../button.scss"

export default function CookieCard(props) {
 
  return (
    <div className="card z-[0]">
      <div className="max-w-[350px] mx-auto my-10">
        <div className="cardCont rounded-lg">
          <img className="cardImg w-full" src={props.src} alt="cookie images" />
        </div>{" "}
        <p className="mt-3 text-xs xl:text-lg font-bold"> {props.name} </p>{" "}
        <h3 className="mt-1 text-xs xl:text-lg"> {props.symbol + props.price} </h3>
        {/* ADD TO CART BUTTON */}
        <button className="cardbtn" onClick={()=>{props.AddtoCart(props.item , props.num, props.src, props.name , props.price)}} >
            <p className="h-full w-full flex justify-center items-center rounded-md text-white text-xs xl:text-lg"> ADD TO CART </p>
        </button>
      </div>
    </div>
  );
}
