import React, { Component } from 'react'
import Main from './components/Main'
import $ from 'jquery'

class App extends Component {
  componentDidMount() {
    $(window).on('load', () => {
      $('.inner').delay(500).fadeOut('slow')
      setTimeout(() => {
        $('body').css('overflow', 'visible')
      }, 500)
    })
  }
  render() {
    let component = ''
    switch ( this.props.location ) {
      case '':
        component = <Main />
        break

      default:
      component = <Main />
        break
    }
    return (
      <div className="App">
        <div className="inner">
        </div>
        { component }
      </div>
    );
  }
}

export default App
