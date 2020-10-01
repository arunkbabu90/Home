import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/map.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <div className="hr_line line2"><div className="inner2 inner3"></div></div>
            <div class="con_out"><div class="con_in"><img src={Map} class="co1"></img></div></div>
            <a href="https://drive.google.com/file/d/1RH7eNhPIug8mIZf3oNVIFViyO5y1v3T-/view?usp=sharing" target="_blank"><div className="back3 back5">Resume</div></a>
            <a href="mailto:arunkbabu90@gmail.com"><div className="back3 back4 back5">Email Me</div></a>
            <div className="hr_line line3"><div className="inner3"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact

