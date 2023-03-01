import "../App.scss"
import "../myfooter.scss"
import { NavLink } from "react-router-dom"


// IMPORTED PICTURES
import ig from "../pictures/instagram-png.png"
import linkedin from "../pictures/linkedin-png.png"
import twitter from "../pictures/twitter-png.png"

export default function MyFooter (){
    return (
        <>
            {/* FOOTER */}
            <div className="footer flex-col items-around">
            {/* CONTACT US DIV */}
            <div className="flex justify-center subtitle">
                <h1 className="footertxt title"> Contact Us </h1>
            </div>
            {/* ALL OTHER INFORMATION DIV */}
            <div className="other">
                {/* Phone DIV */}
                <div className="flex flex-col subtitle">
                    {/* Phone */}
                    <h2 className="footertxt footersub"> Phone </h2>
                    {/* number 1 */}
                    <a href = "https://wa.me//+2348124373563" className="footertxt phone">
                    +2348124373563
                    </a>
                    {/* number 2 */}
                    <a href = "https://wa.me//+2348188331664" className="footertxt phone">
                    +2348188331664
                    </a>
                </div>
                {/* Useful Links DiV */}
                <div className="flex flex-col subtitle">
                    {/* Useful Links */}
                    <h1 className="footertxt footersub"> Useful Links </h1>
                    <NavLink to = "/" className="footertxt useful" > Home </NavLink>
                    <NavLink to = "/cookie-menu"  className="footertxt useful" > Menu </NavLink>
                    <NavLink to = "/recipes"  className="footertxt useful" > Recipes </NavLink>
                </div>
                {/* Social Media DIV */}
                <div className="flex flex-col justify-start">
                    {/* Social Media */}
                    <h1 className="footertxt footersub"> Social Media </h1>
                    <div className="flex justify-start my-[2%]">
                        {/* INSTAGRAM */}
                        <a className = "m-[5%] md:m-[5%]" href = "https://instagram.com" ><img src = {ig} alt = "instagram" /></a>
                        {/* LINKED IN */}
                        <a className = "m-[5%] md:m-[5%]" href = "https://linkedin.com" ><img src = {linkedin} alt = "linkedin" /></a>
                        {/* TWITTER */}
                        <a className = "m-[5%] md:m-[5%]" href = "https://twitter.com" ><img src = {twitter} alt = "twitter" /></a>
                    </div>
                </div>
                {/* Location DIV */}
                <div className="flex flex-col subtitle">
                    {/* Location */}
                    <h1 className="footertxt footersub"> Location </h1>
                    {/* Ps */}
                    <p className="footertxt">No, 23 Yola Abdul Way,</p>
                    <p className="footertxt">off Abulado Cl,</p>
                    <p className="footertxt">Sambo Local Govt,</p>
                    <p className="footertxt">Lagos, Nigeria.</p>
                </div>
            </div>
        </div>
     </>
    )
}