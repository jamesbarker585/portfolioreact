
//About page component
import React, { Component } from 'react';
import './PageAbout.css';
import SectionBox from './SectionBox.js';

class PageAbout extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron personalInfoBox">
          
          
          <div className="wrapper d-none d-sm-block">
            <div className="title">
              <div id="avatarDiv">
                <img className="avatarImg" src="images/me.jpg"></img>
              </div>
              <div id="textDiv">
               <h1 className="text-center">James Barker</h1>
                <p className="lead text-center">Full Stack Web Developer</p>
              </div>
            </div>
          </div>

          <div className="d-xs-none d-sm-none"> {/**This is for little screens */}
          
              <div id="avatarDiv">
                <img className="avatarImgSmall"  src="images/me.jpg"></img>
              </div>
              <div id="textDiv">
               <h2 className="text-center">James Barker</h2>
                <p className="lead text-center">Full Stack Web Developer</p>
              </div>
  
          </div>
          

          <p className="my-4">
          Full Stack Web Developer with extensive experience in client services, Troubleshooting, 
          technical support. Upscale focusing on web development for instance HTML, React, CSS. 
          A self-motivated developer with excellent communication skills, and a great eye for detail who 
          likes to learn..
          <br/>
          <br/>
          I'm constantly learning new languages and tools, and creating my own personal projects.
          I really enjoy working on projects in a team environment, reading fantasy books, and golfing.
          <br/>
          <br/>
          Please feel free to <a href="jamesbarker585@gmail.com">contact me</a>.
          </p>
          <hr/>
          
          <div className="contactMethods row"> 
            <div className="contact col-6 text-center">
              <a href="https://github.com/jamesbarker585?tab=repositories" target="_blank"><span className="contactIcon text-center"><i className="fab fa-github"/></span>
              <span className="contactText text-center">JBarker</span></a>
            </div>
             <div className="contact col-6 text-center">
              <a href="https://www.linkedin.com/in/james-barker-78961295/" target="_blank"><span className="contactIcon text-center"><i className="fab fa-linkedin"/></span>
              <span className="contactText text-center">JBarker</span></a>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <SectionBox title='Resume' icon='far fa-address-card' target='/resume'/>
          <SectionBox title='Projects' icon='fa-th' target='/projects'/>
        </div>
      </div>
    );
  }
}

export default PageAbout;
