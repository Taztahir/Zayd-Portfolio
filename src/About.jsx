import './App.css'

function About(){
    return(
        <section id='about' className='bg-white comic-neue-regular space-y-20 lg:py-10 py-20 '>
            <div>
                {/* About me  */}
                <h1 className='text-5xl ? text-center comic-neue-regular'>About Me</h1>
            </div>
            <div className='lg:flex gap-10 lg:max-w-5xl md:mx-auto md:max-w-3xl sm:mx-10 mx-5 max-lg:space-y-5'>
                <div className='flex md:gap-10 sm:gap-5 '>
                {/* details  */}
                <div className='space-y-3 font-bold md:text-xl text-sm'>
                    {/* full name  */}
                    <div className='w-30'>
                        <span>Full Name:</span>
                    </div>
                    {/* phone number  */}
                    <div className=''>
                        <span>Phone:</span>
                    </div>
                    {/* email  */}
                    <div>
                        <span>Email:</span>
                    </div>
                    {/* website  */}
                    <div>
                        <span>Website:</span>
                    </div>
                    {/* address  */}
                    <div>
                        <span>Address:</span>
                    </div>
                </div>
                <div className='space-y-3 text-[#4D4D4D] md:text-xl text-sm'>
                    {/* full name  */}
                    <div className='items-center space-x-10'>
                        <span>Tahir Zayd</span>
                    </div>
                    {/* phone number  */}
                    <div className='items-center space-x-10'>
                        <span> +234 906 0720 810</span>
                    </div>
                    {/* email  */}
                    <div>
                        <span>taztaz162004@gmail.com</span>
                    </div>  
                    {/* website  */}
                    <div>
                        <span><a href="">https://zayd-portfolio.vercel.app</a></span>
                    </div>
                    {/* address  */}
                    <div>
                        <span>42B Owororoad, <br /> Oworoshoki, Lagos</span>
                    </div>
                </div>
            </div>
            {/* full details  */}
            <div className='space-y-5'>
                <h1 className='text-4xl '>Hello There!</h1>
                <p className='sm:text-xl text-sm comic-neue-regular'>
                    I’m <b>Tahir Zayd</b> , a passionate web developer who loves turning ideas into interactive and visually appealing digital experiences. I specialize in creating modern, responsive, and user‑friendly websites that work seamlessly across all devices.
                </p>
                <p className='sm:text-xl text-sm comic-neue-regular'>
                    I work with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>Bootstrap</b> and <b>Tailwind CSS</b> and I am currently expanding my skills by studying React Native to build high‑quality mobile applications. Every project is an opportunity to improve my craft, solve problems, and create something meaningful for people to use and enjoy.
                </p>
                {/* Multimedia */}
                    <div className='flex gap-3'>
                        {/* Twitter */}
                        <a href="https://x.com/taz1393177" target='_blank'>
                            <div className='bg-[#2F3C4F] py-2 px-2 items-center flex hover:bg-[#FF9000] ease-in-out duration-500 rounded-2xl'>
                                <ion-icon className="sm:text-4xl text-2xl text-white" name="logo-twitter"></ion-icon>
                            </div>
                        </a>
                        {/* github  */}
                        <a href="https://github.com/Taztahir" target='_blank'>
                            <div className='bg-[#2F3C4F] py-2 px-2 items-center flex hover:bg-[#FF9000] ease-in-out duration-500 rounded-2xl'>
                                <ion-icon className="sm:text-4xl text-2xl text-white" name="logo-github"></ion-icon>
                            </div>
                        </a>
                        {/* whatapp  */}
                        <a href="https://api.whatsapp.com/send/?phone=%2B2349060720810&text&type=phone_number&app_absent=0" target='_blank'>
                            <div className='bg-[#2F3C4F] py-2 px-2 items-center flex hover:bg-[#FF9000] ease-in-out duration-500 rounded-2xl'>
                                <ion-icon className="sm:text-4xl text-2xl text-white" name="logo-whatsapp"></ion-icon>
                            </div>
                        </a>
                        {/* instagram  */}
                        {/* <a href="">
                            <div className='bg-[#2F3C4F] py-2 px-2 items-center flex hover:bg-[#FF9000] ease-in-out duration-500 rounded-2xl'>
                                <ion-icon className="sm:text-4xl text-2xl text-white" name="logo-instagram"></ion-icon>
                            </div>
                        </a> */}
                    </div>
            </div>

            </div>
        </section>
    )
}
export default About;