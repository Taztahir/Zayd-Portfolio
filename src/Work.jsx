import { div } from "framer-motion/client";
import Portfolio from './assets/Portfolio-image.png'
import Ramhaaz from './assets/ramhaaz-research.png'
import Ecommerce from './assets/e-commerce.png'
import AnimalImage from './assets/Animal-image.png'
import Calculator from './assets/calculator.png'
import TailwindHover from './assets/Tailwind-Hover.png'
import TodoList from './assets/TodoList.png'
import CoworkSpace from './assets/coworkspace.png'


function Work(){
    return(
        <div className="bg-[#FF9000] py-20">
            <h1 className="text-center comic-neue-bold text-5xl text-white">Project</h1>
            <hr className="w-20 mx-auto mt-3 text-white " />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl gap-5 mx-auto py-10 md:max-w-2xl max-w-xs">
                {/* image 1 */}
                <div>
                    <a href="https://zayd-portfolio.vercel.app/">
                        <img src={Portfolio} alt=""  className="w-80 h-40 shadow-2xl hover:scale-110"/>
                        
                    </a>
                    
                </div>
                {/* image 2  */}
                <div>
                    <a href="https://ramhaaz.com/">
                        <img src={Ramhaaz} alt="" className="w-80 h-40 shadow-2xl"/>
                        
                    </a>

                </div>
                {/* image 3 */}
                <div>
                    <a href="https://product-list-final-project.vercel.app/">
                        <img src={Ecommerce} alt="" className="w-80 h-40 shadow-2xl"/>

                    </a>

                </div>
                {/* image 4 */}
                <div>
                    <a href="https://animal-image-slider-sand.vercel.app/">
                        <img src={AnimalImage} alt="" className="w-80 h-40 shadow-2xl"/>
                        
                    </a>

                </div>
                {/* image 5  */}
                <div>
                    <a href="https://taz-calculator.vercel.app/">
                        <img src={Calculator} alt="" className="w-80 h-40 shadow-2xl"/>
                        
                    </a>

                </div>
                {/* image 6  */}
                <div>
                    <a href="https://tailwind-hover.vercel.app/">
                        <img src={TailwindHover} alt="" className="w-80 h-40 shadow-2xl"/>
                        
                    </a>
                    
                </div>
                {/* image */}
                <div>
                    <a href="https://todo-list-git-main-tahir-zayds-projects.vercel.app/">
                        <img src={TodoList} alt="" className="w-80 h-40 shadow-2xl"/>
                        
                    </a>
                    
                </div>
                {/* image 8  */}
                <div>
                    <a href="https://co-workspace.vercel.app/">
                        <img src={CoworkSpace} alt="" className="w-80 h-40 shadow-2xl"/>
                        
                    </a>
                    
                </div>
            </div>
        </div>  
    )
}
export default Work;