import Obutton from "../components/Obutton";
import HeroText from "../components/HeroText";
import HeroText2 from "../components/HeroText2";

import "../App.scss"



export default function HomePage () {


    return (
        <div className="homepage">
                {/* Background Image background XL*/}
            <img
                id="bck_image"
                className="hidden z-[0] absolute rotate-180 w-96 md:w-96 md:rotate-0 lg:block xl:w-auto lg:top-48 lg:left-1/3 xl:top-48 xl:left-1/4"
                src="pictures/LAND_PIC.png"
                alt="ameno"
            />

      {/* lg:-translate-y-72 xl:-translate-y-3/4 */}

            {/* Discover... */}
            <section id="main_content" className="my-16">
                <div className="flex justify-between">
                <div className="ml-5 my-5 w-80 h-max flex flex-col justify-between mb-5 lg:w-max lg:my-36">
                    <div className="flex justify-between">
                    <HeroText text="Discover" />
                    {/* Delightful 1st */}
                    <p className="script hidden ml-3 basis-full text-red-500 text-3xl font-bold lg:inline-block lg:text-6xl">
                        Delightful
                    </p>
                    </div>
                    {/* Delightful 2nd*/}
                    <p className="script basis-full text-red-500 text-4xl font-bold md:text-4xl lg:hidden">
                    Delightful
                    </p>
                    <HeroText text="taste of cookies" />
                    <p className="grotesk mt-10 font-medium lg:mt-20">
                    Experience the richness of quality cookies
                    </p>
                    <p className="font-medium">to marvel your tastebuds</p>
                    <Obutton text="Order Now" />
                </div>
                {/* Get Up To XL */}
                <div className="hidden w-auto h-max mr-5 mt-24 flex flex-col items-end md:flex">
                    <img
                    className="w-20 h-20"
                    src="pictures/party-confetti.png"
                    alt="ameno"
                    />
                    <HeroText2 text="Get up to" />
                    <div className="w-auto flex justify-between">
                    <p className="script basis-full text-red-500 text-3xl md:text-4xl lg:text-5xl font-bold ">
                        {" "}
                        10%{" "}
                    </p>
                    <HeroText2 text="discount" />
                    </div>
                    <HeroText2 text="when you purchase" />
                    <HeroText2 text="three different types" />
                    <HeroText2 text="of cookies" />
                    <HeroText2 text="at once!" />
                </div>
                </div>
            </section>

            {/* Get Up To SM */}
            <section id = "bottom" className="mt-24">
                <div className="flex justify-between items-center bg-red-600 py-5 mt-5 md:bg-transparent md:justify-end">
                    {/* All the Cookies... */}
                    <div className="all bg-white rounded-2xl flex justify-center items-center w-32 mx-5 h-max md:bg-red-600 xl:w-72 ">
                        <h2 className="w-max h-max flex items-center text-md text-red-600 font-bold m-6 md:text-white lg:text-xl xl:text-2xl">
                        All the cookies you'll ever need
                        </h2>
                    </div>
                    {/* Get Up to Itself */}
                    <div className="w-auto h-max mr-5 flex flex-col items-end md:hidden">
                        <img
                        className="hidden w-20 h-20 md:inline-block"
                        src="pictures/party-confetti.png"
                        alt="ameno"
                        />
                        <HeroText2 text="Get up to" />
                        <div className="w-auto flex justify-between">
                        <p className="script basis-full text-white text-3xl md:text-4xl md:text-red lg:text-5xl font-bold ">
                            {" "}
                            10%{" "}
                        </p>
                        <HeroText2 text="discount" />
                        </div>
                        <HeroText2 text="when you purchase" />
                        <HeroText2 text="three different types" />
                        <HeroText2 text="of cookies" />
                        <HeroText2 text="at once!" />
                    </div>
                </div>
            </section>
        </div>
    )
}