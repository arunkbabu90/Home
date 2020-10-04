import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <div className="hr_line line2"><div className="inner2"></div></div>
                <h2 class="abouthead">Arun K Babu</h2>
                <p className="subhead">Full Stack Android Developer</p>
                <br></br>
                <div className="d11">
                    <p className="p10">I started my journey in the world of computers from an young age,
                    now I’m 23 years old, Pursuing my Master Of Computer Appications Post Graduate Degree in
                    Rajiv Gandhi Institute of Technology, Kottayam.  Android Application Development is my center of
                    interest. I always love the idea of mobile application development, so that I can reach a billion
                    users. I also like creating Interactive UI components for better UX I believe because UX and UI is
                    the core of an App
                    </p>
                </div>

                <h3 class="sk_head">Skills</h3>
                <table>
                    <tr>
                        <td><div class="sk">Kotlin</div></td>
                        <td><div class="sk ">Java</div></td>
                        <td><div class="sk ">Android</div></td>
                    </tr>
                    <tr>
                        <td><div class="sk ">Retrofit</div></td>
                        <td><div class="sk ">Firebase</div></td>
                        <td><div class="sk ">Flutter</div></td>
                    </tr>
                    <tr>
                    </tr>
                </table>
            </div>
        )
    }
}

export default About