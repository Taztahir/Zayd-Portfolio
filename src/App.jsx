import './App.css';
import Header from './Header';
import About from './About'
import load from './assets/loader.gif';

document.addEventListener("DOMContentLoaded", function () {
    const spinner = document.getElementById("spinner");
    const content = document.getElementById("content");

    // Show spinner for 2 seconds minimum
    setTimeout(() => {
      spinner.style.opacity = "0";

      setTimeout(() => {
        spinner.style.display = "none";
        content.classList.remove("hidden");
      }, 500); // fade-out duration
    }, 2000);
  });

function App(){
  return(
    <div  className='selection:bg-[#E68200] selection:text-white'>
      <div className=''>
        <div id='spinner' className='fixed flex justify-center items-center inset-0 w-full h-full z-[9999] bg-white'>
          <img src={load} alt="" />
        </div>
      </div>
      <div id='content' className='hidden'>
        <Header/>
        <About/>
      </div>
      
    </div>
  )
}
export default App;
