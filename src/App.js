import React, { Component } from 'react'
import Background from './components/Background'
import Header from './components/Header'
import Body from './components/Body'
import './styles/App.css'
import './styles/BgStyle.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Background />
        <Header />
        <Body />
      </div>
    )
  }
}

export default App;
