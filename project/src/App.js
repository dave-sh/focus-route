import React from 'react'
import './app.css'

import {Content, Navbar} from './containers';
import { Dashboard, Day, Planner, Setting, Sign_In, Sign_Up } from './pages';

const App = () => {
  return (
    <div className="app">
      <div className="header_bg">
        <Navbar /> 
      </div>
      
    </div>
  )
}

export default App