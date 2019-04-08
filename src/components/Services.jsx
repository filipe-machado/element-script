import React, { Component } from 'react'
import M from 'materialize-css'

export default class Services extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems, {
                indicators: true,
                duration: 220
            });
        });     
    }
    
    render() {

        return(
            <div className="container box--second">
                <h2 id="services">serviços</h2>

                <div className="carousel carousel-slider center">
                    <div className="carousel-fixed-item center">
                        
                    </div>
                    <div className="carousel-item white" href="#one!">
                        <h6 className="orange-text">First Panel</h6>
                        <p className="orange-text">This is your first panel</p>
                    </div>
                    <div className="carousel-item white" href="#two!">
                        <h6 className="orange-text">Second Panel</h6>
                        <p className="orange-text">This is your second panel</p>
                    </div>
                    <div className="carousel-item white" href="#three!">
                        <h6 className="orange-text">Third Panel</h6>
                        <p className="orange-text">This is your third panel</p>
                    </div>
                    <div className="carousel-item white" href="#four!">
                        <h6 className="orange-text">Fourth Panel</h6>
                        <p className="orange-text">This is your fourth panel</p>
                    </div>
                </div>
            </div>
        )
    }
}