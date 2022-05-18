import React, { Component } from 'react'
import './intro.css'

class  Intro extends Component {
    render() { 
        return (
        <div className="i">
          <div className="i-left">
             <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Nigel Tseng</h1>
                  <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UX/UI Designer</div>
                        <div className="i-title-item">Tutor</div>
                        <div className="i-title-item">Student</div>
                        <div className="i-title-item">Entrepreneur</div>
                    </div>
                </div>
                <p className="i-desc">
                I design and develop modern websites for customers of all scales and 
                I specialise in front-end development of stylish websites that are both 
                fit and functional for both the user and owner!
                </p>
             </div>
           </div>
          <div className="i-right">
              <div className="i-bg"></div>
          </div>
        </div>

);
    }
}
 
export default Intro;