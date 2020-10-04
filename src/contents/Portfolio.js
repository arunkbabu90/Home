import React, { Component } from 'react';
import HallFrame from '../components/HallFrame';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Work</h1>
                <div className="hr_line line2"><div className="inner2 inner3"></div></div>
                <ul>
                    <HallFrame to='https://play.google.com/store/apps/details?id=arunkbabu.care&hl=en_IN' src={project1} />
                    <HallFrame to='https://play.google.com/store/apps/details?id=arunkbabu90.tracer&hl=en-GB' src={project2} />
                    <HallFrame to='https://play.google.com/store/apps/details?id=arunkbabu90.insight&hl=en' src={project3} />
                    <HallFrame to='https://play.google.com/store/apps/details?id=arunkbabu90.popmovies&hl=en' src={project4} />
                </ul>
            </div>
        )
    }
}

export default Portfolio
