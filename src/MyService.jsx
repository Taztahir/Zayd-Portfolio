import { div } from "framer-motion/client";



function MyService(){
    return(
        <div className="bg-[#FF9000] py-10">
            <h1 className="text-white  comic-neue-bold text-5xl text-center">My Service</h1>
                    <div className="text-center grid lg:grid-cols-3 max-w-6xl lg:mx-auto py-10 gap-5 max-sm:mx-5 max-md:mx-20">
                        <div className="flex flex-col gap-5 items-center">
                            <div className="bg-white w-24 rounded-full py-4 px-3">
                                <ion-icon className="text-[#ff9000] text-6xl " name="bar-chart-outline"></ion-icon>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-white text-2xl comic-neue-bold">Web Development</h1>
                                <p className="comic-neue-regular text-white">
                                    I build responsive and user-friendly websites using modern tools like HTML, CSS, JavaScript, React, Tailwind, and WordPress. I focus on clean design, fast performance, and seamless user experience. Whether it’s a portfolio, e-commerce, or booking site—I create web solutions that work.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <div className="bg-white w-24 rounded-full py-4 px-3">
                                <ion-icon className="text-[#ff9000] text-6xl " name="pencil-outline"></ion-icon>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-white text-2xl comic-neue-bold">Tutor</h1>
                                <p className="comic-neue-regular text-white">
                                    I teach web development in a simple and practical way—covering HTML, CSS, JavaScript, React, and WordPress. My focus is on helping students build real-world projects, understand core concepts, and grow their confidence as developers.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <div className="bg-white w-24 rounded-full py-4 px-3">
                                <ion-icon className="text-[#ff9000] text-6xl " name="people-outline"></ion-icon>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-white text-2xl comic-neue-bold">Support</h1>
                                <p className="comic-neue-regular text-white">
                                    I offer reliable WordPress support—handling bug fixes, plugin setup, content updates, backups, and performance optimization. I help keep your WordPress site secure, fast, and running smoothly.
                                </p>
                            </div>
                        </div>
                    </div>
            
        </div>
    )
}
export default MyService;