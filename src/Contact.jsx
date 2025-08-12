import { div } from "framer-motion/client";
import contact from './assets/cover_bg_1.jpg'


function Contact(){
    return(
        <div className="grid grid-cols-2 items-center max-md:py-10">
            {/* image  */}
            <div className="Contact-image max-md:hidden">
                <div>

                </div>
            </div>
            <div className="md:px-16 space-y-5 px-10">
                <h1 className="lg:text-5xl comic-neue-bold text-3xl">Contact</h1>
                <form action="" className="grid space-y-5 comic-neue-regular text-2xl">
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] lg:w-60" type="text" name="" id=""  placeholder="Your Firstname"/>
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] lg:w-60" type="text" name="" id=""  placeholder="Your Lastname" />
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] lg:w-150" type="email" name="" id="" placeholder="Your email address" />
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] lg:w-150" type="text" name="" id=""  placeholder="Your Subject"/>
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] lg:w-150 pb-40" type="text" name="" id=""  placeholder="Say somthing about us"/>
                    <button className="comic-neue-bold bg-[#FF9000] text-white py-2 text-xl lg:w-40 rounded-lg lg:rounded-full">
                        Send message
                    </button>
                </form>
                
                
            </div>
        </div>
    )
}
export default Contact;