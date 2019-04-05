import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import M from 'materialize-css'

export default class Menu extends Component {

    componentDidMount() {
        if ($('div#home').scrollTop(500)) {
            $('nav').attr('style', 'background-color: rgba(0, 0, 0, .06)')
        }
        

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav')
            M.Sidenav.init(elems, {})
        })
    }

    render() {
        return (
            <Fragment>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#!" data-target="slide-out" className="sidenav-trigger brand-logo">&lt;/&gt;</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/">INÍCIO</a></li>
                                <li><a href="/services">SERVIÇOS</a></li>
                                <li><a href="/portfolio">PORTFÓLIO</a></li>
                                <li><a href="/about">SOBRE</a></li>
                                <li><a href="/contact">CONTATO</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Fragment>
        )
    }
}