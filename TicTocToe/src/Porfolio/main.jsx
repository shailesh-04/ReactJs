import { BrowserRouter, Routes, Route ,Link }from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Service from './Components/Service.jsx';
import Skill from './Components/Skill.jsx';
import Contact from "./Components/Contact.jsx";
import './main.css';
function Header() {
  
  return (
    <header className="Header">
      <a className="Logo">Portfo<span>lio</span></a>
    <nav>
      <Link to="/" className="active" >Home</Link>
      <Link to="/About" >About Me</Link>
      <Link to="/Service" >Service</Link>
      <Link to="/Skill" >Skill</Link>
      <Link to="/Contact" >Contact</Link>
    </nav>
  <a className="btn">Subcribe</a>
    </header>
  )
}
function Footar(props){
  return(
    <footer className="Footar">
      <div className="Content">
        <h1>{props.Name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem maxime nobis ad dolor architecto expedita neque sunt laudantium quam mollitia ut, temporibus inventore, facilis dolore, itaque aperiam magni necessitatibus.</p>
        <div className="Social-Link">
          <a href="#"><span>Facebook</span></a>
          <a href="#"><span>Github</span></a>
          <a href="#"><span>Instagram</span></a>
        </div>
      </div>
    </footer>  
  );
}
const main = () => {
  const Name = "Shiyal Nayan";
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>
        <Route path="/Skill" element={<Skill/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default main;