import "../App.scss"


function HeroText(props){
    return (
        <p className="grotesk basis-full text-black text-3xl font-bold md:text-4xl lg:text-6xl"> {props.text}</p>
    )
}


export default HeroText