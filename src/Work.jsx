import { div } from "framer-motion/client";
import Portfolio from './assets/Portfolio-image.png'
import Ramhaaz from './assets/ramhaaz-research.png'
import Ecommerce from './assets/e-commerce.png'
import AnimalImage from './assets/Animal-image.png'
import Calculator from './assets/calculator.png'
import TailwindHover from './assets/Tailwind-Hover.png'


function Work(){
    return(
        <div className="bg-[#FF9000] py-20">
            <h1 className="text-center comic-neue-bold text-4xl text-white">Work</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl gap-10 mx-auto py-10 max-w-xs">
                {/* image 1 */}
                <div>
                    <a href="https://zayd-portfolio.vercel.app/">
                        <img src={Portfolio} alt=""  className="w-80 h-40 rounded-xl shadow-2xl hover:scale-110"/>
                        <h1 className="text-center text-white comic-neue-bold text-xl py-2">Portfolio</h1>
                    </a>
                    
                </div>
                {/* image 2  */}
                <div>
                    <a href="https://ramhaaz.com/">
                        <img src={Ramhaaz} alt="" className="w-80 h-40 rounded-xl shadow-2xl"/>
                        <h1 className="text-center text-white comic-neue-bold text-xl py-2">Ramhaaz Research</h1>
                    </a>

                </div>
                {/* image 3 */}
                <div>
                    <a href="https://product-list-final-project.vercel.app/">
                        <img src={Ecommerce} alt="" className="w-80 h-40 rounded-xl shadow-2xl"/>
                        <h1 className="text-center text-white comic-neue-bold text-xl py-2">Simple E-commerce</h1>
                    </a>

                </div>
                {/* image 4 */}
                <div>
                    <a href="https://animal-image-slider-sand.vercel.app/">
                        <img src={AnimalImage} alt="" className="w-80 h-40 rounded-xl shadow-2xl"/>
                        <h1 className="text-center text-white comic-neue-bold text-xl py-2">Animal Image Slider</h1>
                    </a>

                </div>
                {/* image 5  */}
                <div>
                    <a href="https://taz-calculator.vercel.app/">
                        <img src={Calculator} alt="" className="w-80 h-40 rounded-xl shadow-2xl"/>
                        <h1 className="text-center text-white comic-neue-bold text-xl py-2">Simple Calculator</h1>
                    </a>

                </div>
                {/* image 6  */}
                <div>
                    <a href="https://tailwind-hover.vercel.app/">
                        <img src={TailwindHover} alt="" className="w-80 h-40 rounded-xl shadow-2xl"/>
                        <h1 className="text-center text-white comic-neue-bold text-xl py-2">Tailwind Hover Effect</h1>
                    </a>
                    
                </div>

            </div>
        </div>  
    )
}
export default Work;