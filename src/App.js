import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container-at-app">
        <ConfigurationController />
        <Layout />
      </div>
    )
  }
}

export default App
