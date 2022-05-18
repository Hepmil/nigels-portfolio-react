import React, { Component } from 'react';
import './contact.css';
import Calling from "../img/Calling.png";
import Email from "../img/Email.png";
import Github from "../img/Github.jpg";

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="c">
             <div className="c-bg"></div>
              <div className="c-wrapper">
                <div className="c-left">
                 <h1 className="c-title">Contact Me through...</h1>
                 <div className="c-info">
                  <div className="c-info-item">
                   <img src={Calling}
                        alt=""
                        className="c-icon" 
                     />
                     +65 9635-7734
                  </div>
                  <div className="c-info-item">
                   <img src={Email}
                        alt=""
                        className="c-icon" 
                     />
                     nigeltseng8@gmail.com
                  </div>
                  <div className="c-info-item">
                   <img src={Github}
                        alt=""
                        className="c-icon" 
                     />
                     GreenTeaBottle
                  </div>
                 </div>
                </div>
                 <div className="c-right">
                    <h2>Get in touch with me!</h2>
                 <form>
                  <input type="text" placeholder="Name" name="username" />
                  <input type="text" placeholder="Subject" name="username" />
                  <input type="text" placeholder="Email" name="username" />
                  <textarea rows="5" placeholder="" name="username" />
                  <button>Submit</button>
                 </form>
              </div>
              </div>
            </div>
        );
    }
}
 
export default Contact;