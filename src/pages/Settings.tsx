import React from 'react'
export default function Settings(){
  return (
    <div>
      <h1>Settings</h1>
      <div className="grid" style={{maxWidth:560}}>
        <label>Username<input className="input" placeholder="yourname" /></label>
        <label>Email<input className="input" placeholder="you@example.com" /></label>
        <label>Accent Color<input className="input" type="color" defaultValue="#6ee7b7"/></label>
        <label>Banner Image<input className="input" type="file" /></label>
        <div className="row"><button className="btn">Save</button></div>
      </div>
      <hr/>
      <div className="card">
        <strong>Public Profile</strong>
        <p>Toggle what to show: global totals, deck grid, recent matches (last 10), public notes.</p>
      </div>
    </div>
  )
}
