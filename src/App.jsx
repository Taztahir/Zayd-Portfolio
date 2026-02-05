import './App.css';
import Header from './Header';
import About from './About'
import Projects from './Projects';
import MyService from './MyService';
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact';
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



function App() {
  return (
    <div className='selection:bg-[#8750F7] sora selection:text-white'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <MyService />
      <Work />
      <Contact />
      <Footer />
      <ScrollUpButton />
    </div>
  )
}
export default App;
