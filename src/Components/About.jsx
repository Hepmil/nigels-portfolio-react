import React, { Component } from 'react';
import "./about.css";
import Reactt from "../img/Reactt.png";
import Node from "../img/Node.png";
import Sql from "../img/Sql.png";
import Cpp from "../img/Cpp.png";
import Angular from "../img/Angular.png";
import Python from "../img/Python.png";
import Github from "../img/Github.jpg"
import Html from "../img/Html.png"


class About extends Component {
    render() { 
        return (
            <div className="a">
             <div className="a-left">
              <section className="a-education">
               <h2>Education</h2>
                <div className="a-schools">
                     <div className="a-schools-item">
                        <h4>Singapore Institute of Management</h4>
                        <p>BSc Computer Science</p>
                     </div>
                     <div className="a-schools-item">
                        <h4>Tampines Junior College</h4>
                            <p>GCE 'A' Levels</p>
                     </div>
                     <div className="a-schools-item">
                        <h4>St. Patrick's School</h4>
                            <p>GCE 'O' Levels</p>
                     </div>
                </div>
              </section>
              <section className="a-languages">
                <h2>Languages</h2>
                <div className="a-lang">
                    <div className="a-langs-item">
                            <img src={Reactt}
                                    alt=""
                                    className="a-icon" 
                                />
                            </div>
                    <div className="a-langs-item">
                            <img src={Node}
                                    alt=""
                                    className="a-icon-node" 
                                />
                            </div>
                            <div className="a-langs-item">
                        <img src={Sql}
                                alt=""
                                className="a-icon" 
                            />
                        </div>
                        <div className="a-langs-item">
                        <img src={Cpp}
                                alt=""
                                className="a-icon" 
                            />
                        </div>
                        <div className="a-langs-item">
                        <img src={Angular}
                                alt=""
                                className="a-icon-angular"  
                            />
                        </div>
                        <div className="a-langs-item">
                        <img src={Python}
                                alt=""
                                className="a-icon-python"  
                            />
                        </div>
                        <div className="a-langs-item">
                        <img src={Github}
                                alt=""
                                className="a-icon-github"  
                            />
                        </div>
                        <div className="a-langs-item">
                        <img src={Html}
                                alt=""
                                className="a-icon-html"  
                            />
                        </div>
                </div>
              </section>
             </div>
             <div className="a-right">
                <h2>About Me</h2>
                        <p>Just a passionate web developer that is interested 
                            in software architecture loves looking into 
                            growing trends and tech related projects that are constantly 
                            on the move. Currently still tenuring for my degree in Computer Science 
                            in University of London (Singapore Management University)
                        </p>
             </div>
            </div>
            

    


        );
    }
}
 
export default About;