import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quae neque suscipit, placeat tempora nostrum.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, in suscipit id labore quas quibusdam.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Html & Css</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React Js</p><hr style={{width:"65%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>C, C++, Python</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>MySQL</p><hr style={{width:"75%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  );
}

export default About;
