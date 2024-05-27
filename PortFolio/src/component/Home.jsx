import React,{useState} from 'react'
import Bg from '../assets/BG_image.svg';
export default function Home() {
  return (
    <section className="Home" id="Home">
      <div className="H-Content">
      <h5>Hellow, My Name Is</h5>
        <h1 className="head">Shailesh<span>.04m</span></h1>
        <h4>I'am a Web Developer</h4>
        <div className="input-box">
          <input type="email" name="Email" placeholder="Enter Your Email..."/>
          <input type="submit" value="Submit" className="btn"/>
        </div>
      </div>
      <div className="H-Image">
        <img src={Bg} alt="Portfolio Image "/>
      </div>
    </section>
  )
}