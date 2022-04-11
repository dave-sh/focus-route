import React from 'react'
import './app.css'

import { Navbar} from './containers';
import { Dashboard, Day, Planner, Setting, SignIn, SignUp } from './pages';
import {Routes, Route} from "react-router-dom"

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
          <Route path="/sign_in" element={<SignIn/>} />
          <Route path="/sign_up" element={<SignUp/>} />

        </Routes>
      </div>
      
    </div>
  )
}

export default App