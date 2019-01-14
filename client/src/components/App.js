import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Main />
      </div>
    </Router>
  )
}

export default App

createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`
