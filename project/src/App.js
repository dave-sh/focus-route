import React from 'react'
import './app.css'
import { Dashboard, Day, Planner, Setting, SignIn, SignUp, Timer } from './pages';
import {Routes, Route} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from './context/UserAuthContext';

const App = () => {
  return (
    <div className="app">
      <div className="header_bg">
        
        <UserAuthContextProvider>
        <Routes>
          <Route path="/dashboard" element={
            <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>  
          
        } />
          <Route path="/day" element={
            <ProtectedRoute>
            <Day/>
          </ProtectedRoute>
          
        } />
          <Route path="/planner" element={
            <ProtectedRoute>
            <Planner/>
          </ProtectedRoute>
          
        } />
          <Route path="/setting" element={
            <ProtectedRoute>
            <Setting/>
          </ProtectedRoute>
          
        } />
          <Route path="/timer" element={
            <ProtectedRoute>
            <Timer/>
          </ProtectedRoute>  
          
        } />
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign_up" element={<SignUp/>} />

        </Routes>
        </UserAuthContextProvider>

      </div>
      
    </div>
  )
}

export default App