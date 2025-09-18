import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './styles/app.css'
import Dashboard from './pages/Dashboard'
import Decks from './pages/Decks'
import LogMatch from './pages/LogMatch'
import Opponents from './pages/Opponents'
import GlobalStats from './pages/GlobalStats'
import Settings from './pages/Settings'
import PublicProfile from './pages/PublicProfile'

function Nav() {
  const link = ({isActive}:{isActive:boolean}) => isActive ? 'active' : undefined
  return (
    <nav className="nav">
      <strong style={{marginRight:12}}>MTG Tracker</strong>
      <NavLink className={link} to="/">Dashboard</NavLink>
      <NavLink className={link} to="/log">Log Match</NavLink>
      <NavLink className={link} to="/decks">Decks</NavLink>
      <NavLink className={link} to="/opponents">Opponents</NavLink>
      <NavLink className={link} to="/stats">Global Stats</NavLink>
      <NavLink className={link} to="/settings">Settings</NavLink>
      <span style={{marginLeft:'auto',opacity:.7,fontSize:12}}>Commander-only</span>
    </nav>
  )
}

function AppShell(){
  return (
    <BrowserRouter>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/log" element={<LogMatch/>}/>
          <Route path="/decks" element={<Decks/>}/>
          <Route path="/opponents" element={<Opponents/>}/>
          <Route path="/stats" element={<GlobalStats/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/u/:username" element={<PublicProfile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<AppShell/>)
