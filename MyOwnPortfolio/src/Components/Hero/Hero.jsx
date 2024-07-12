import React from 'react'
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Abhay S Naik,</span> Development Intern based in Bangalore</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quisquam eum possimus sunt saepe debitis tenetur in pariatur inventore quaerat ipsam!
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero