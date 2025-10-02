

function Footer(){
    return(
        <div className="md:flex flex-col space-y-5 text-center md:justify-between px-5 md:px-10 bg-[#2A1454] lg:px-20 py-6">
            <div>
                <h1 className="text-5xl text-white satisfy-regular">Zayd</h1>
            </div>
            <div className="text-white space-x-5 max-md:hidden">
                <a className="hover:" href="#hero">Home</a>
                <a className="hover:" href="#about">About</a>
                <a className="hover:" href="#skills">Skills</a>
                <a className="hover:" href="#project">Project</a>
                <a className="hover:" href="#service">Service</a>
                <a className="hover:" href="#resume">Resume</a>
            </div>
            <div>
                <h1 className="text-gray-400">© 2024 All rights reserved by <a href="#hero" className="text-[#8750F7]">Zayd Tahir</a></h1>
            </div>
        </div>
    )
}
export default Footer;