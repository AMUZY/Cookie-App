import "../App.scss"
import "../about.scss"
import MyFooter from "../components/MyFooter"
import ProgressiveImage from "react-progressive-image"


// IMPORTED IMAGES
import placeholder from "../pictures/placeholder.png"
import ceo from "../pictures/CEO.png"
import aboutus1  from "../pictures/about_us1.png"
import aboutus2  from "../pictures/about_us2.png"
import aboutus3 from "../pictures/about_us3.png"
import aboutus4  from "../pictures/about_us4.png"
import ig from "../pictures/instagram-png.png"
import linkedin from "../pictures/linkedin-png.png"
import twitter from "../pictures/twitter-png.png"
import cookieguy1 from "../pictures/cookieguy1.jpg"
import cookielady from "../pictures/cokkielady.jpg"
import cookieguy2 from "../pictures/cookieguy2.jpg"
import breadshop from "../pictures/bread_shop.png"
import cakeshop from "../pictures/cake_shop.png"
//IMPORTED SVGs
import leftquote from "../SVG FILES/left-quote.svg"
import rightquote from "../SVG FILES/right-quote.svg"



export default function About () {
    return (
        <div>
            {/* ABOUT US DIV */}
            <div className="my-8 flex justify-center items-center md:my-16">
                <h2 className="script text-black text-3xl font-bold md:text-5xl xl:text-7xl animate"> About Us </h2>
            </div>
            {/* CEO BACKGROUND DIV */}
            <div className="ceo_bckgrd">
                {/* MEET THE CEO DIV */}
                <div className="meet">
                    {/* MEET THE CEO TITLE */}
                    <div className="my-[5%] flex justify-center">
                        <h1 className="textcol w-max font-base text-xl md:text-4xl"> MEET THE CEO </h1>
                    </div>
                    {/* CEO PASSPORT AND TEXT */}
                    <div className="passport">
                        <div className="ceoimg mb-5">
                            {/* CEO IMAGE */}
                            <img className = "mr-5 objfitimg" src = {ceo} alt = "beautiful young ceo" />
                        </div>
                        <div className="ceodisc">
                            {/* CEO DESCRIPTION */}
                            <p className="textcol text-xs md:text-lg">
                                <p className="inline font-bold">Hyacinth Favour</p>, the CEO of Creamy Creations bakery, a lady with the warmest of hearts, with a passion for baking
                                and an everlasting love for cookies, has dedicated her time and effort in making sure her dream of having a cookie 
                                bakery comes true. Thanks to her, Nigerians can now have a taste of different flavours of cookies we haven’t tasted 
                                ever before.
                                She and her team work everyday to ensure we have  an endless supply of cookies.
                            </p>
                        {/* QUOTE DIV */}
                            <div className="quotediv">
                                <img className = "img1" src = {leftquote} alt = "left quote" />
                                <p className="textcol text-xs md:text-lg">
                                With gratitude from my heart, I want to specially give thanks to everybody
                                contributing to the success of this great company, from the managers
                                to the all the indoor and outdoor staffs. God bless you all.
                                </p>
                                <h2 className="textcol font-bold">
                                    -THE CEO
                                </h2>
                                <img className = "img2" src = {rightquote} alt = "right quote" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* GALLERY DIV */}
                <div className="gallery">
                    <img className = "objfitimg" src = {aboutus1} alt = "cookie 1" />
                    <img className = "objfitimg" src = {aboutus2} alt = "cookie 2" />
                    <img className = "objfitimg" src = {aboutus3} alt = "cookie 3" />
                    <img className = "objfitimg" src = {aboutus4} alt = "cookie 4" />
                </div>
            </div>
            {/* MEET THE REST OF THE TEAM */}
            <div className="team_div">
                {/* MEET THE REST OF THE TEAM TEXT */}
                <div className="rest my-5">
                    <h2 className="ingrd text-lg md:text-xl"> MEET THE REST OF THE TEAM </h2>
                </div>
                {/* PERSONNEL DIV */}
                <div className="team">
                    {/* SPAN 1 */}
                    <span className="border-t-[1px] border-black"></span>
                    {/* MAIN PERSONNEL DIV */}
                    <div className="personnel">
                        {/* PERSONNEL 1 DIV */}
                        <div className = "m-5">
                            {/* PARAGRAPH */}
                            <p className="text-xs md:text-lg">
                                <p className="inline font-bold">Shawn Michael</p>, the CEO of Creamy Creations bakery, a lady with the warmest of hearts, with a passion for baking
                                and an everlasting love for cookies, has dedicated her time and effort in making sure her dream of having a cookie 
                                bakery comes true. Thanks to her, Nigerians can now have a taste of different flavours of cookies we haven’t tasted 
                                ever before.
                                She and her team work everyday to ensure we have  an endless supply of cookies.
                            </p>
                            {/* PICTURE DIV */}
                            <div className = "flex flex-col items-center my-3">
                                {/* PERSONNAL IMAGE */}
                                <img className = "rounded-full" src = {cookieguy1} alt = "personnel"/>
                                {/* NAME */}
                                <h2> Shawn Michael </h2>
                                {/* ROLE */}
                                <h3> Co Founder</h3>
                                {/* ICONS DIV */}
                                <div className = "icondiv">
                                    {/* INSTAGRAM */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://instagram.com" ><img src = {ig} alt = "instagram" /></a>
                                    {/* LINKED IN */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://linkedin.com" ><img src = {linkedin} alt = "linkedin" /></a>
                                    {/* TWITTER */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://twitter.com" ><img src = {twitter} alt = "twitter" /></a>
                                </div>
                            </div>
                        </div>
                        {/* PERSONNEL 2 DIV */}
                        <div className = "m-5">
                            {/* PARAGRAPH */}
                            <p className="text-xs md:text-lg">
                                <p className="inline font-bold">Vanessa Humming</p>, the CEO of Creamy Creations bakery, a lady with the warmest of hearts, with a passion for baking
                                and an everlasting love for cookies, has dedicated her time and effort in making sure her dream of having a cookie 
                                bakery comes true. Thanks to her, Nigerians can now have a taste of different flavours of cookies we haven’t tasted 
                                ever before.
                                She and her team work everyday to ensure we have  an endless supply of cookies.
                            </p>
                            {/* PICTURE DIV */}
                            <div className = "flex flex-col items-center my-3">
                                {/* PERSONNAL IMAGE */}
                                <img className = "rounded-full" src = {cookielady} alt = "personnel"/>
                                {/* NAME */}
                                <h2> Vanessa Humming</h2>
                                {/* ROLE */}
                                <h3> Bakery Manager </h3>
                                {/* ICONS DIV */}
                                <div className = "icondiv">
                                    {/* INSTAGRAM */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://instagram.com" ><img src = {ig} alt = "instagram" /></a>
                                    {/* LINKED IN */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://linkedin.com" ><img src = {linkedin} alt = "linkedin" /></a>
                                    {/* TWITTER */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://twitter.com" ><img src = {twitter} alt = "twitter" /></a>
                                </div>
                            </div>
                        </div>
                        {/* PERSONNEL 3 DIV */}
                        <div className = "m-5">
                            {/* PARAGRAPH */}
                            <p className="text-xs md:text-lg">
                                <p className="inline font-bold">Jacobs Germane</p>, the CEO of Creamy Creations bakery, a lady with the warmest of hearts, with a passion for baking
                                and an everlasting love for cookies, has dedicated her time and effort in making sure her dream of having a cookie 
                                bakery comes true. Thanks to her, Nigerians can now have a taste of different flavours of cookies we haven’t tasted 
                                ever before.
                                She and her team work everyday to ensure we have  an endless supply of cookies.
                            </p>
                            {/* PICTURE DIV */}
                            <div className = "flex flex-col items-center my-3">
                                {/* PERSONNAL IMAGE */}
                                <img className = "rounded-full" src = {cookieguy2} alt = "personnel"/>
                                {/* NAME */}
                                <h2> Jacobs Germane </h2>
                                {/* ROLE */}
                                <h3> Personnel Manager </h3>
                                {/* ICONS DIV */}
                                <div className = "icondiv">
                                    {/* INSTAGRAM */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://instagram.com" ><img src = {ig} alt = "instagram" /></a>
                                    {/* LINKED IN */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://linkedin.com" ><img src = {linkedin} alt = "linkedin" /></a>
                                    {/* TWITTER */}
                                    <a className = "mx-[5%] md:mx-[5%]" href = "https://twitter.com" ><img src = {twitter} alt = "twitter" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SPAN 2 */}
                    <span className="border-t-[1px] border-black"></span>
                </div>
            </div>

            {/* WHAT WE STAND FOR */}
            <div className="whatdiv">
                {/* WHAT WE STAND FOR DIV */}
                <div className="what">
                    {/* WHAT WE STAND FOR TEXT */}
                    <h1 className="ingrd font-bold text-lg md:text-xl"> WHAT WE STAND FOR </h1>
                </div>
                {/* TRAITS DIV */}
                <div className="trait">
                    {/* RESPONSIBILITY DIV */}
                    <div className = "relative flex flex-col items-center traitbox">
                        <svg width="260" height="305" viewBox="0 0 260 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.5" y="2.5" width="255" height="299.118" fill="#FFFAF0" stroke="#793820" stroke-width="5"/>
                        </svg>
                        {/* THUMBS UP SVG */}
                        <svg className = "iconsvg" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.75 62.6391C43.75 62.6391 41.5625 63.4375 35 63.4375C28.4375 63.4375 24.8828 61.25 21.875 59.0625H13.125C10.8044 59.0625 8.57876 58.1406 6.93782 56.4997C5.29687 54.8587 4.375 52.6331 4.375 50.3125V43.75C4.375 41.4294 5.29687 39.2038 6.93782 37.5628C8.57876 35.9219 10.8044 35 13.125 35H17.2266C17.9778 34.9958 18.7156 34.8004 19.3703 34.432C20.025 34.0636 20.5751 33.5345 20.9686 32.8945C20.9686 32.8945 22.1484 30.3256 25.7031 24.1691C29.2578 18.0127 36.0938 8.75 37.1875 6.5625C41.1523 6.5625 43.0664 9.57031 41.8359 13.0854C40.4305 17.1035 38.5943 20.5201 38.0816 24.9922C38.0078 25.6457 38.5109 26.6328 39.1686 26.6328L56.875 28.0273" stroke="#793820" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M56.875 37.0508L45.9375 36.7773C43.2031 36.5258 41.5625 35.082 41.5625 32.6758C41.5625 30.2695 43.4766 28.7328 45.9375 28.5742L56.875 28.0273C59.2813 28.0273 61.25 30.2695 61.25 32.6758V32.699C61.2439 33.8553 60.7802 34.9621 59.9604 35.7776C59.1406 36.5931 58.0313 37.0508 56.875 37.0508ZM61.25 45.9375L45.9375 45.6641C43.4766 45.5492 41.5625 43.9674 41.5625 41.5625C41.5625 39.1549 43.4766 37.6168 45.9375 37.4609L61.25 37.1875C62.4092 37.1911 63.5199 37.6532 64.3396 38.4729C65.1593 39.2926 65.6214 40.4033 65.625 41.5625V41.5625C65.6214 42.7217 65.1593 43.8324 64.3396 44.6521C63.5199 45.4718 62.4092 45.9339 61.25 45.9375V45.9375ZM54.6875 63.4375L45.9375 63.0273C43.0664 62.7758 41.5625 61.4688 41.5625 59.0625C41.5625 56.6562 43.5312 54.9609 45.9375 54.9609L54.6875 54.6875C55.8468 54.6907 56.9577 55.1527 57.7775 55.9725C58.5973 56.7923 59.0593 57.9032 59.0625 59.0625V59.0625C59.0593 60.2218 58.5973 61.3327 57.7775 62.1525C56.9577 62.9723 55.8468 63.4343 54.6875 63.4375V63.4375ZM59.0625 54.6875L45.9375 54.4141C43.3398 54.2992 41.5625 52.7188 41.5625 50.3125C41.5625 47.9062 43.3398 46.3695 45.9375 46.2109L59.0625 45.9375C60.2218 45.9407 61.3327 46.4027 62.1525 47.2225C62.9723 48.0423 63.4343 49.1532 63.4375 50.3125V50.3125C63.4343 51.4718 62.9723 52.5827 62.1525 53.4025C61.3327 54.2223 60.2218 54.6843 59.0625 54.6875Z" stroke="#793820" stroke-width="5" stroke-miterlimit="10"/>
                        </svg>
                        {/* QUALITY */}
                        <h2> Responsibility </h2>
                        {/* DESCRIPTION */}
                        <h3> We are responsible people </h3>
                    </div>
                    {/* TRUST DIV */}
                    <div className = "relative flex flex-col items-center traitbox">
                        <svg width="260" height="305" viewBox="0 0 260 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.5" y="2.5" width="255" height="299.118" fill="#FFFAF0" stroke="#793820" stroke-width="5"/>
                        </svg>
                        {/* LEAF SVG */}
                        <svg className = "iconsvg" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.0882 34.8394C34.846 45.9136 47.014 52.4761 63.0101 54.937M43.4443 23.6859C31.2913 15.8355 18.7132 21.471 7.09211 9.16634C4.38508 6.29525 5.95734 41.3636 20.5042 54.6527C31.1396 64.3597 47.5609 63.2769 53.098 53.8433C58.6351 44.4097 55.5972 31.5349 43.4443 23.6859V23.6859Z" stroke="#793820" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {/* QUALITY */}
                        <h2> Trust </h2>
                        {/* DESCRIPTION */}
                        <h3> We are trustworthy </h3>
                    </div>
                    {/* QUALITY DIV */}
                    <div className = "relative flex flex-col items-center traitbox">
                        <svg width="260" height="305" viewBox="0 0 260 305" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.5" y="2.5" width="255" height="299.118" fill="#FFFAF0" stroke="#793820" stroke-width="5"/>
                        </svg>
                        {/* EYE SVG */}
                        <svg className = "iconsvg" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.9534 15.3125C24.2975 15.3125 13.3669 21.4799 4.7618 33.8146C4.51618 34.1706 4.38158 34.5914 4.37501 35.0238C4.36844 35.4562 4.49019 35.8809 4.72489 36.2441C11.3366 46.5938 22.121 54.6875 34.9534 54.6875C47.6464 54.6875 58.6522 46.5691 65.2763 36.1963C65.5055 35.8402 65.6273 35.4256 65.6273 35.0021C65.6273 34.5785 65.5055 34.164 65.2763 33.8078C58.6372 23.5539 47.5507 15.3125 34.9534 15.3125Z" stroke="#793820" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M35 45.9375C41.0406 45.9375 45.9375 41.0406 45.9375 35C45.9375 28.9594 41.0406 24.0625 35 24.0625C28.9594 24.0625 24.0625 28.9594 24.0625 35C24.0625 41.0406 28.9594 45.9375 35 45.9375Z" stroke="#793820" stroke-width="5" stroke-miterlimit="10"/>
                        </svg>
                        {/* QUALITY */}
                        <h2> Quality </h2>
                        {/* DESCRIPTION */}
                        <h3> We give the best quality </h3>
                    </div>
                </div>
            </div>

            {/* MORE FROM CREAMY CREATIONS */}
            <div className="w-[90%] mx-auto mt-16 md:mt-28">
                {/* MORE FROM ... TEXT */}  
                <div className="flex justify-center">
                    <h1 className="ingrd font-bold text-lg md:text-xl"> MORE FROM CREAMY CREATIONS </h1>
                </div>
                {/* BREAD SHOP */}
                <div className = "my-10 shopdiv">
                    {/* BREAD SHOP IMAGE */}
                    <div className = "mb-5">
                        <ProgressiveImage delay = {50000} src = {breadshop} placeholder = {placeholder} >
                            {src => <img className = "w-full h-full" src = {breadshop} alt = "bread shop" />}
                        </ProgressiveImage>
                    </div>
                    {/* title and paragraph div */}
                    <div className = "">
                        {/* BREAD SHOP TITLE */}
                        <h2 className="text-lg font-bold md:text-xl">
                            Our Bread Shop
                        </h2>
                        {/* BREAD SHOP TEXT */}
                        <p>
                            Vanessa Humming the CEO of Creamy Creations bakery, a lady with the warmest
                            of hearts, with a passion for baking and an everlasting love for cookies, has 
                            dedicated her time and effort in making sure her dream of having a cookie bakery
                            comes true. Thanks to her, Nigerians can now have a taste of different flavours of 
                            cookies we haven’t tasted ever before.
                        </p>
                    </div>
                </div>
                {/* CAKE SHOP */}
                <div className = "my-10 shopdiv">
                    {/* CAKE SHOP IMAGE */}
                    <div className = "mb-5 md:order-2">
                         <ProgressiveImage src = {cakeshop} placeholder = {placeholder}>
                            {src=> <img className = "w-full h-full" src = {cakeshop} alt = "cake shop" />}
                        </ProgressiveImage>
                    </div>
                    {/* title and paragraph div */}
                    <div className = "">
                        {/* CAKE SHOP TITLE */}
                        <h2 className="text-lg font-bold md:text-xl">
                            Our Cake Shop
                        </h2>
                        {/* CAKE SHOP TEXT */}
                        <p>
                            Vanessa Humming the CEO of Creamy Creations bakery, a lady with the warmest
                            of hearts, with a passion for baking and an everlasting love for cookies, has 
                            dedicated her time and effort in making sure her dream of having a cookie bakery
                            comes true. Thanks to her, Nigerians can now have a taste of different flavours of 
                            cookies we haven’t tasted ever before.
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
  
    )
}