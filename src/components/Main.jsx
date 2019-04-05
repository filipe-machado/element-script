import React, { Component, Fragment } from 'react'
import '../sass/main.scss'

import Home from './Home';
import Services from './Services'
import Portfolio  from './Portfolio'
import About  from './About'
import Contact from './Contact'


export default class Main extends Component {

    render() {        
        return (
            <Fragment>                
                <Home />
                <Services />
                <Portfolio />
                <About />
                <Contact />

                <ul id="slide-out" className="sidenav">
                    <div className="links">
                        <li><a className="waves-effect" href="#home">INÍCIO</a></li>
                        <li><a className="waves-effect" href="#services">SERVIÇOS</a></li>
                        <li><a className="waves-effect" href="#portfolio">PORTFÓLIO</a></li>                        
                        <li><a className="waves-effect" href="#about">SOBRE</a></li>
                        <li><a className="waves-effect" href="#contact">CONTATO</a></li>
                    </div>
                </ul>
            </Fragment>
        )
    }
}