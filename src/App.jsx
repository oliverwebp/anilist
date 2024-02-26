import React from 'react'
import {BrowserRouter as Router, Route, redirect, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import Single from './pages/Single'
import Navigation from './components/MainNavigation.jsx'

function App() {

  return (
    <>
      <Router>
        <Navigation/>
        <>
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/results" element={<Results/>}>
            </Route>
            <Route path="/single" element={<Single/>}>
            </Route>
          </Routes>
        </>
      </Router>
    </>
  )
}

export default App
