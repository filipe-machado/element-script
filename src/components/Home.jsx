import React, { Component } from 'react'
import Menu from './parts/Menu'
import { TimelineLite } from 'gsap/all'

const iconsArray = [
    { src: 'https://fabianlee.org/wp-content/uploads/2017/03/docker-logo.png', width: '80', height: '80' },
    { src: 'https://images-na.ssl-images-amazon.com/images/I/41PFKRsyHbL.png', width: '80', height: '80' },
    { src: 'https://cdn.freebiesupply.com/logos/large/2x/postgresql-inc-logo-png-transparent.png', width: '80', height: '80' },
]

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.logoTl = new TimelineLite({ paused: false })

        this.content = null
        this.head1 = null
        this.head2 = null
        this.head3 = null
        this.button = null
        this.message = null
        this.partners = null
        this.icons = []
    }

    componentDidMount() {
        this.logoTl
            .set(this.content, { autoAlpha: 1})
            .from(this.head1, 0.5, { left: 100, autoAlpha: 0}, '+=0.4')
            .from(this.head2, 0.5, { left: -100, autoAlpha: 0}, '+=0.2')
            .from(this.head3, 0.5, { left: 100, autoAlpha: 0}, '+=0')
            .from(this.button, 0.2, { left: -340, autoAlpha: 0}, '+=0.6')
            .from(this.partners, 0.5, { left: 100, autoAlpha: 0}, '+=0.6')
            .staggerFrom(this.icons, 0.5, { scale: 0, autoAlpha: 0}, 0.35);
    }

    render() {
        return(
            
            <div className="container box--first" id="home" ref={ div => this.content = div }>              
                <Menu />
                <div className="present">
                    <p ref={p => this.head1 = p} className="presentation">um recurso</p>
                    <p ref={p => this.head2 = p} className="presentation">incrível para sua</p>
                    <p ref={p => this.head3 = p} className="presentation">empresa</p>
                </div>

                <div className="visit">
                    <a ref={a => this.button = a} href="#services" className="scrollspy waves-effect waves-light btn-large">Leia mais</a>
                </div>

                <div>
                    <p ref={p => this.partners = p} className="message">Conte com a segurança e confiança de gigantes de serviços WEB como:</p>
                </div>
                <div className="partner--image">
                    { iconsArray.map( (icon, index) => {
                        const { src, width, height } = icon
                        return <img 
                                key={`icon-${index}`} 
                                src={ src } width={ width } height={ height }
                                ref={ img => this.icons[index] = img }
                                alt=""
                            />
                    })}
                </div>
            </div>
        )
    }
}