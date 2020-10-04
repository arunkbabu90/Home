import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <h1>Arun K Babu</h1>
                <ReactTypingEffect className="typingeffect" text={['A Full Stack Android Developer']} speed={100} eraseDelay={900} />
                <div className="hr_line"><div className="hr_inner"></div></div>
                <Social />
            </div>
        )
    }
}

export default Home
