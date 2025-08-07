import Profile from './assets/profile.svg'
import './App.css'

function Header(){
    return(
        <header className='Header '>
            <div className='bg-[#FF9000]/90 text-center md:space-y-8 space-y-10 md:py-85 lg:py-36 py-40'>
                {/* Profile Image  */}
                <div className='flex justify-center items-center'>
                    <img src={Profile} alt=""  className='rounded-full size-52'/>
                </div>
                {/* Profile name  */}
                <div>
                    <h1 className='kaushan-script-regular text-white md:text-6xl text-5xl inline-block -rotate-7'>- Zayd Tahir -</h1>
                </div>
                {/* Multimedia  */}
                <div className='space-y-7'>
                    {  /* Text  */}
                    <div>
                        <span className='space-mono-regular text-white '>Web developer / Frontend Tutor</span>
                    </div>
                    {/* Multimedia */}
                    <div className='flex justify-center gap-5'>
                        {/* Twitter */}
                        <a href="https://x.com/taz1393177" target='_blank'>
                            <div>
                                <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-twitter" ></ion-icon>
                            </div>
                        </a>
                        {/* github  */}
                        <a href="https://github.com/Taztahir?tab=repositories" target='_blank'>
                            <div>
                                <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-github"></ion-icon>
                            </div>
                        </a>
                        {/* whatapp  */}
                        <a href="https://api.whatsapp.com/send/?phone=%2B2349060720810&text&type=phone_number&app_absent=0" target='_blank'>
                            <div>
                                <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-whatsapp"></ion-icon>
                            </div>
                        </a>                    
                        {/* instagram  */}
                        {/* <a href="" target='_blank'>
                            <div>
                                <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-instagram"></ion-icon>
                            </div>
                        </a> */}

                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;