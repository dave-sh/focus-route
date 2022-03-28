import React from 'react'
import './app.css'

import {Content, Navbar} from './containers';
import { Dashboard, Day, Planner, Setting, Sign_In, Sign_Up } from './pages';
import {Routes, Route, Link} from "react-router-dom"
import { Date } from './components';

const App = () => {
  return (
    <div className="app">
      <div className="header_bg">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/day" element={<Day/>} />
          <Route path="/planner" element={<Planner/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/sign_in" element={<Sign_In/>} />
          <Route path="/sign_up" element={<Sign_Up/>} />

        </Routes>
      </div>
      
    </div>
  )
}

export default App