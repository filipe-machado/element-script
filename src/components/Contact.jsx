import React, { Component } from 'react'
import M from 'materialize-css'

export default class Contact extends Component {
    render() {
        return(
            <div className="container box--fifth">
                <h2 id="contact" style={{color: '#F36416'}}>contato</h2>

                <div className="visit">
                    <button 
                        className="waves-effect waves-light btn-large" 
                        onClick={                            
                            (e) => M.toast({
                                html: toastHTML, 
                                classes: 'rounded',
                                activationPercent: 0.5,
                                displayLength: 2000
                                //completeCallback: () => {window.location="localhost:3000/demo"}
                            })
                        }
                    >Agende uma demonstração</button>
                </div>
            </div>
        )
    }
}

let toastHTML = '<span onclick="M.Toast.dismissAll()">ENTÃO VAMOS LÁ</span>'