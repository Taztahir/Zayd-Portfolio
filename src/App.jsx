import './App.css';
import Header from './Header';
import About from './About'
import load from './assets/loader.gif';

window.addEventListener("load", function () {
    const spinner = document.getElementById("spinner");
    const content = document.getElementById("content");

    // Wait 2 seconds before starting fade-out
    setTimeout(() => {
      spinner.style.opacity = "0";

      // Hide after fade-out animation
      setTimeout(() => {
        spinner.style.display = "none";
        content.classList.remove("hidden");
      }, 500); // Matches fade duration
    }, 2000); // 2 seconds delay
  });

function App(){
  return(
    <div >
      <div className='selection:bg-[#E68200] selection:text-white'>
        <div id='spinner' className='fixed flex justify-center items-center inset-0 '>
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
