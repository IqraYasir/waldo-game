import { useState } from 'react'
import Home from './pages/home/Home.jsx'
import Game from './pages/game/Game.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/play' exact element={<Game />}/>
      <Route errorElement={<ErrorPage />}/>
    </Routes>
  </Router>
)

function App() {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App;
