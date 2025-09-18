import React from 'react'
import { mockDecks } from '@/lib/mock'
import { ManaPips } from '@/lib/mana'

export default function Decks(){
  return (
    <div>
      <h1>Decks</h1>
      <p className="muted">Visual grid with commander art coming later — this skeleton proves routing and layout.</p>
      <div className="grid decks">
        {mockDecks.map(d=>(
          <div key={d.id} className="card" style={{opacity: d.archived? .5: 1}}>
            <img className="thumb" alt="commander art" src="https://placehold.co/600x400/png" />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
              <div style={{fontWeight:700}}>{d.name}</div>
              <span className="badge">{d.archived? 'Archived':'Active'}</span>
            </div>
            <ManaPips colors={d.color_identity}/>
            <div style={{fontSize:12, color:'var(--muted)'}}>{d.tags?.join(' · ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
