import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <div className="contentScroll" class="scroll">
            <h2 className="abouthead">Arun K Babu</h2>
            <p>Full Stack Android Developer</p>
            <br></br>
            <div className="d11">
            <p className="p10">I started my journey in the world of computers from an young age,
            now I’m 23 years old, Pursuing my Master Of Computer Appications Post Graduate Degree in
            Rajiv Gandhi Institute of Technology, Kottayam.  Android Application Development is my center of
            interest, i always love the idea of mobile application development, so that I can reach a billion
            users. I also like creating Interactive UI components for better UX I believe because UX and UI is
            the core of an App
            </p>
            </div>
            </div>
            <div className="Edu">
                <div class="back1 back2 back6"><i class="fa fa-book i1 i4"></i></div>
            </div>
            <h3 style={{marginLeft:"9%"}}>Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <div className="edDiv">
            <h4>Master Of Computer Applications</h4>
            <p className="p1">RIT, Kottayam, Kerala</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> 2018 - 2021</p>
            <h4>Bachelor Of Commerce</h4>
            <p className="p1">St. George College, Vazhakulam, Kerala</p>
            <p className="p1"><i class="fa fa-calendar i2"></i> 2013 - 2015</p>
            </div>

            <h3 class="sk_head">Skills</h3>
            <div class="sk">Kotlin</div>
            <div class="sk s2">Java</div>
            <div class="sk s3">Android</div>
            <div class="sk s4">Retrofit</div>
            <div class="sk s5">Firebase</div>
            <div class="sk s6">Flutter</div>
            </div>
            )
        }
    }
    
export default About
    
