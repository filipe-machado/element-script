import React, { Component } from 'react'
import Main from './components/Main'

class App extends Component {
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
        { component }
      </div>
    );
  }
}

export default App
