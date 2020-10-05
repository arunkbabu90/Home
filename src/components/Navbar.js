import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.png';

class Navbar extends Component {
    constructor(props) {
        super();
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <div>
                <div className="neu2">
                    <div className="neu1">
                        <img src={profilepic} className="profilepic" />
                    </div>
                </div>
                <h2>Arun K Babu</h2>
                <p>Front-end Android Developer</p>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="Portfolio" tolink="/Portfolio" activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/About" activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/Contact" activec={this.activeitem}></Navitem>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
