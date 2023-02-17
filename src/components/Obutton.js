function Obutton (props) {
    return (
        <button className="rounded-md mt-4 bg-red-600 hover:bg-red-500 w-32 h-10 font text-base flex justify-center items-center">
            <h2 className="text-center w-16 w-5 text-base text-white font-bold basis-full">
            {props.text}
            </h2>
        </button>
    )
}



export default Obutton