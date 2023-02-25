import "../App.scss"
import "../about.scss"
import MyFooter from "../components/MyFooter"


export default function About () {
    return (
        <div>
            {/* ABOUT US DIV */}
            <div className="my-8 flex justify-center items-center md:my-16">
                <h2 className="script text-black text-3xl font-bold md:text-5xl xl:text-7xl animate">Recipes</h2>
            </div>
            <MyFooter />
        </div>
  
    )
}