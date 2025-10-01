import { div } from "framer-motion/client";
import contact from './assets/cover_bg_1.jpg'


function Contact(){
    return(
        <div className="grid lg:grid-cols-2 items-center max-md:py-10">
            {/* image  */}
            <div className="Contact-image max-md:hidden">
                <div>

                </div>
            </div>
            <div className="md:px-16 space-y-5 px-5">
                <h1 className="lg:text-5xl comic-neue-bold text-3xl">Contact</h1>
                <form action="https://formsubmit.co/taztaz162004@gmail.com" className="grid space-y-5 comic-neue-regular text-2xl" method="POST">
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] w-full lg:w-60" type="text" name="firstname" id=""  placeholder="Your Firstname" required/>
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] w-full lg:w-60" type="text" name="lastname" id=""  placeholder="Your Lastname" required/>
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] w-full lg:w-130" type="email" name="email" id="" placeholder="Your email address" required/>
                    <input className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm border-[#dfdfdf] w-full lg:w-130" type="text" name="subject" id=""  placeholder="Your Subject" required/>
                    <textarea name="Messge" id="" placeholder="Say Somthing" className="border-2 py-3 px-4 outline-[#ff9000] rounded-sm w-fit border-[#dfdfdf] lg:w-130 pb-40"></textarea>
                    <button className="comic-neue-bold bg-[#FF9000] text-white py-2 w-full px-10 text-xl lg:w-40 rounded-lg lg:rounded-full">
                        Send message
                    </button>
                </form>
                
                
            </div>
        </div>
    )
}
export default Contact;