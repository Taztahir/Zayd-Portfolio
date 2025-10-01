import './App.css';
import Header from './Header';
import About from './About'
import ResumeTimeline from './ResumeTimeline';
import ResumeTimelineMobile from './ResumeTimelineMoblie';
import MyService from './MyService';
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact';
import Map from './Map'
import Footer from './Footer'
import ScrollUpButton from './ScrollUpButton';
import Navbar from './Navbar';
// import load from './assets/loader.gif';

// window.addEventListener("load", function () {
//     const spinner = document.getElementById("spinner");
//     const content = document.getElementById("content");

//     // Wait 2 seconds before starting fade-out
//     setTimeout(() => {
//       spinner.style.opacity = "0";

//       // Hide after fade-out animation
//       setTimeout(() => {
//         spinner.style.display = "none";
//         content.classList.remove("hidden");
//       }, 500); // Matches fade duration
//     }, 2000); // 2 seconds delay
//   });



function App(){
  return(
      <div className='selection:bg-[#E68200] selection:text-white'>
        <Navbar/>
        <Header/>
        <About/>
        <ResumeTimeline/>
        <ResumeTimelineMobile/>
        <MyService/>
        <Skills/>
        <Work/>
        <Contact/>
        <Map/>
        <Footer/>
        <ScrollUpButton/>
      </div>
  )
}
export default App;
