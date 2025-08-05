import Profile from './assets/user-3.jpg'
import './App.css'

function Header(){
    return(
        <header className='Header '>
            <div className='bg-[#FF9000]/90 text-center md:space-y-8 space-y-10 md:py-16 lg:py-20 py-40'>
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
                    <div className='flex justify-center gap-3'>
                        {/* Twitter */}
                        <div>
                            <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-twitter"></ion-icon>
                        </div>
                        {/* github  */}
                        <div>
                            <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-github"></ion-icon>
                        </div>
                        {/* whatapp  */}
                        <div>
                            <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-whatsapp"></ion-icon>
                        </div>
                        {/* instagram  */}
                        <div>
                            <ion-icon className="text-4xl text-white hover:text-black duration-500 ease-in-out" name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;