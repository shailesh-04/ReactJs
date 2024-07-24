import { BrowserRouter, Routes, Route ,Link }from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import './index.css';
function Nav(){
   return(
      <header class="header">
        
        <i className='bx bx-menu' id="manu-icon"></i>
        <nav class="nav-bar">
        <Link to="/" class="active" >Home</Link>
        <Link to="/About" >About Me</Link>
        <Link to="/Project" >Project</Link>
        <Link to="/Contact" >Contact</Link>
      </nav>
    </header>      
   );
}
export default function Header(){
  return(
    <BrowserRouter>
	<Nav/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}
