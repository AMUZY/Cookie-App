import "../App.scss"
import "../recipes.scss"
import MyFooter from "../components/MyFooter"

// IMPORTED IMAGES
import recipe1 from "../pictures/recipe_1.png"
import recipe2 from "../pictures/recipe_2.png"
import cookieguy1 from "../pictures/cookieguy1.jpg"
import cookielady from "../pictures/cokkielady.jpg"
import cookieguy2 from "../pictures/cookieguy2.jpg"
// IMPORTED SVGs
import fullstar from "../SVG FILES/star.svg"
import halfstar from "../SVG FILES/star-half.svg"
import lock from "../SVG FILES/lock-closed.svg"




export default function Recipes () {
    return (
        <div>
            {/* RECIPES DIV */}
            <div className="my-8 flex justify-center items-center md:my-16">
                <h2 className="script text-black text-3xl font-bold md:text-5xl xl:text-7xl animate">Recipes</h2>
            </div>
            {/* THE BEST INGRDIENTS DIV */}
            <div className="mx-5 my-2 flex justify-start items-center md:mx-20 md:my-8 ">
                <h2 className="script text-black font-bold text-2xl md:text-3xl xl:text-5xl animate">The Best Ingredients </h2>
            </div>

            {/* chocolate cookies div done by flexbox and grid */}
            <div className = "gridbox max-h-max">
                {/* Chocolate Cookies IMG */}
                <div className = "imgbox" ><img className = "m-0 cookie_img" src = {recipe1}  alt = "cookie" /></div>
                {/* Chocolate Cookies TITLE */}
                <div className = "recipes titlebox h-[50]%" ><h3 className = "script title" >Chocolate Cookies</h3></div>
                {/* Chocolate Cookies Ingredients */}
                <div className = "recipes ingrdbox" >
                    {/* Ingredients h3 div */}
                    <div>
                        <h3 className = "ingrd">Ingredients</h3>
                    </div>
                    {/* Ingredients */}
                    <ol className="ul1">
                        <li>1 cup of purpose flour (120g)</li>
                        <li>1/2 cup natural unsweetened cocoa powder (33g)</li>
                        <li>1/2 teaspoon baking soda</li>
                        <li>1/2 teaspoon salt</li>
                        <li>1/2 cup unsalted butter softened (113g)</li>
                        <li>1/2 cup granulated sugar (66g)</li>
                        <li>1 large egg</li>
                    </ol>
                    <ol className="ul1 mb-3">
                        <li>2 teaspoons vanilla extract</li>
                        <li>1 cup semisweet chips or dark chocolate chunks or chopped bard (180g)</li>
                    </ol>
                </div>
                {/* Preparation Method Div */}
                <div className = "recipes prepbox" >
                    {/* Preparation Method h3 div */}
                    <div>
                        <h3 className="ingrd">Preparation Method</h3>
                    </div>
                    {/* Preparation Steps */}
                    <div>
                        <ol className="ul1">
                            <li>Preheat oven to 375F. Line two baking soda sheets with parchment paper.</li>
                            <li>In a bowl, sift together flour, cocoa powder, baking soda and salt.</li>
                            <li>In a large mixing bowl or the bowl of a stand mixer fitted with the paddle attachment, beat butter and sugars on medium speed until very light and fluffy, abut 3 minutes</li>
                            <li>Add egg and vanilla and beat until well combined, scraping down the sides of the bowl as needed.</li>
                            <li>With the mixer on low speed, gradually add the flour mixture, mixing just until combined. Stir in the chocolate chips.</li>
                        </ol>
                        <ol className="ul1 mb-3">
                            <li>Scoop 1 and 1/2 tablespoon or until cookie edges are firm and the center appears dry. Let cool on the sheets for 5 minutes. Transfer to wire racks to continue cooking.</li>
                            <li>Store baked cookies in an airtight container for up to 5 days.</li>
                        </ol>
                    </div>
                </div>
                {/* Chocolate Tips Div */}
                <div className = "recipes tipbox" >
                    {/* TIP h3 */}
                    <div>
                        <h3 className="ingrd">Tips</h3>
                    </div>
                    {/* Tip Paragraph div */}
                    <div>
                        <p className="para">
                        Allow your cookies bake up to 
                        15 minutes to the end time.
                        That is, you shouldn't be opening
                        the oven frequently because it 
                        would change the temperature 
                        in the oven and the cookies won't
                        swell enough.
                        A cookie cutter is best for 
                        getting even and round shapes.
                        </p>
                    </div>
                </div>
            </div>

            {/* danish butter cookies div done by grid */}
            <div className = "gridbox max-h-max">
                {/* Danish Cookies IMG */}
                <div className = "imgbox" ><img className = "m-0 cookie_img" src = {recipe2} alt = "cookie" /></div>
                {/* Danish Cookies TITLE */}
                <div className = "recipes titlebox" ><h3 className = "script title" >Danish Butter Cookies</h3></div>
                {/* Danish Cookies Ingredients */}
                <div className = "recipes ingrdbox" >
                    {/* Ingredients h3 div */}
                    <div>
                        <h3 className = "ingrd">Ingredients</h3>
                    </div>
                    {/* Ingredients */}
                    <ol className="ul1 mb-3">
                        <li>4 cups flour 480g, sifted</li>
                        <li>1/3 cup corn starch 40g</li>
                        <li>3/4 teaspoon salt 4g</li>
                        <li>1 cup unsalted butter 227g</li>
                        <li>1 cup sugar 200g</li>
                        <li>2 eggs</li>
                        <li>1 teaspoon vanilla extract 5ml</li>
                    </ol>
                </div>
                {/* Preparation Method Div */}
                <div className = "recipes prepbox" >
                    {/* Preparation Method h3 div */}
                    <div>
                        <h3 className="ingrd">Preparation Method</h3>
                    </div>
                    {/* Preparation Steps */}
                    <div>
                        <ol className="ul1">
                            <li>Sift your flour, starch and salt in a large bowl. Give it a whisk.</li>
                            <li>In your standing mixer fitted with a paddle attachment, cream the butter and sugar together.</li>
                            <li>Add the eggs while mixing. Scrape down sides of the bowl.</li>
                            <li>Add 1 teaspoon vanilla extract.</li>
                            <li>Pour in the flour mixture and mix until everything is well incorporated.</li>
                        </ol>
                        <ol className = "ul1">
                        <li>Put the dough in a plastic bad, flatten it together, then chill it in the refrigerator so it firms up.</li>
                            <li>Once the dough is chilled, place it on a rolling matt, sprinkle with flour and roll out with a rolling pin.</li>
                            <li>Move the dough around to to prevent it from sticking.</li>
                            <li>Use a circular cookie cutter to cut your cookies. Take away extra scraps to re-roll for more cookies.</li>
                            <li>Place them on non-stick baking sheet and bake at 375F for 12 minutes.</li>
                        </ol>
                    </div>
                </div>
                {/* Danish Tips Div */}
                <div className = "recipes tipbox" >
                    {/* TIP h3 */}
                    <div>
                        <h3 className="ingrd">Tips</h3>
                    </div>
                    {/* Tip Paragraph div */}
                    <div>
                        <p className="para">
                        Measure your ingredients 
                        properly and stick to a 
                        recipe that works.
                        </p>
                    </div>
                </div>
            </div>

            {/* What customers say title */}
            <div>
                <h1 className="title text-center my-8"> What our customers say </h1>
            </div>
            {/* What customer says DIV */}
            <div className = "cstbgrd">
                {/* customer 1 */}
                <div className = "cst">
                    {/* image and name div */}
                    <div className = "flex justify-start" >
                        {/* image div */}
                        <div>
                            <img className = "rounded-full cstimg" src = {cookieguy1} alt = "customer 1" />
                        </div>
                        {/* name div */}
                        <div className = "flex flex-col justify-evenly mx-3">
                            <h2 className="firstname">John .C</h2>
                            <h3 className="lastname">Michael</h3>
                        </div>
                    </div>
                     {/* paragraph */}
                    <p>
                        We won’t disclose all of our recipes. As a bakery 
                        of our own, we have our secret formulas that are
                        designed to keep you coming back for more!
                    </p>
                    {/* stars div */}
                    <div className = "flex flex-row">
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {halfstar} alt = "half star"/>
                    </div>
                </div>
                {/* customer 2 */}
                <div className = "cst">
                    {/* image and name div */}
                    <div className = "flex justify-start" >
                        {/* image div */}
                        <div>
                             <img className = "rounded-full cstimg" src = {cookielady} alt = "customer 2" />
                        </div>
                        {/* name div */}
                        <div className = "flex flex-col justify-evenly mx-3">
                            <h2 className="firstname">Mariam .J</h2>
                            <h3 className="lastname">Stephen</h3>
                        </div>
                    </div>
                     {/* paragraph */}
                    <p>
                        We won’t disclose all of our recipes. As a bakery 
                        of our own, we have our secret formulas that are
                        designed to keep you coming back for more!
                    </p>
                    {/* stars div */}
                    <div className = "flex flex-row">
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {halfstar} alt = "half star"/>
                    </div>
                </div>
                {/* customer 3 */}
                <div className = "cst">
                    {/* image and name div */}
                    <div className = "flex justify-start" >
                        {/* image div */}
                        <div>
                           <img className = "rounded-full cstimg" src = {cookieguy2} alt = "customer 3" />
                        </div>
                        {/* name div */}
                        <div className = "flex flex-col justify-evenly mx-3">
                            <h2 className="firstname">Miracle .S</h2>
                            <h3 className="lastname">Jonah</h3>
                        </div>
                    </div>
                     {/* paragraph */}
                    <p>
                        We won’t disclose all of our recipes. As a bakery 
                        of our own, we have our secret formulas that are
                        designed to keep you coming back for more!
                    </p>
                    {/* stars div */}
                    <div className = "flex flex-row">
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                        <img src = {fullstar} alt = "full star"/>
                    </div>
                </div>
            </div>
            
            {/* OUR SECRET FORMULA */}
            <div className="rounded-xl secret flex flex-col justify-center items-center">
                <img src = {lock} alt = "lock icon" />
                <h1 className="ingrd">Our Secret Formula</h1>
                <p className="text-center">
                    We don’t disclose all of our recipes. As a bakery
                    of our own, we have our secret formulas that are 
                    designed to keep you coming back for more!
                </p>
            </div>
            <MyFooter />
        </div>
    )
}