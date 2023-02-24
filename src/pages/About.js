import { useLocation } from "react-router-dom"
import "../App.scss"
import MyFooter from "../components/MyFooter"



export default function About () {
    let link = useLocation();
    if(link.pathname === "/about"){
        alert("ABOUT PAGE ISN'T FINISHED YET")
      }
    return (
        <div>
            <MyFooter />
        </div>
  
    )
}