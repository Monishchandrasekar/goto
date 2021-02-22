import React from 'react'

import {Nav, Sidebar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <Sidebar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
