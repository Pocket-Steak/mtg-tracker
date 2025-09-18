import React from 'react'
import { useParams } from 'react-router-dom'
import { mockDecks, mockMatches } from '@/lib/mock'
import { ManaPips } from '@/lib/mana'
export default function PublicProfile(){
  const { username } = useParams()
  const wins = mockMatches.filter(m=>m.result==='win').length
  return (
    <div>
      <div className="card" style={{backgroundImage:'linear-gradient(90deg,#0f172a,#0b0b0f)',borderColor:'#223'}}>
        <h1 style={{margin:0}}>{username}'s Commander Stats</h1>
        <div style={{opacity:.8}}>Public profile — demo layout</div>
      </div>
      <h2>Global Totals</h2>
      <div className="kpis">
        <div className="kpi"><div>Total Games</div><strong style={{fontSize:22}}>{mockMatches.length}</strong></div>
        <div className="kpi"><div>Wins</div><strong style={{fontSize:22}}>{wins}</strong></div>
        <div className="kpi"><div>Losses</div><strong style={{fontSize:22}}>{mockMatches.length - wins}</strong></div>
        <div className="kpi"><div>Win Rate</div><strong style={{fontSize:22}}>{Math.round(wins/mockMatches.length*100)}%</strong></div>
      </div>
      <h2>Decks</h2>
      <div className="grid decks">
        {mockDecks.map(d=>(
          <div key={d.id} className="card">
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
      <h2 style={{marginTop:24}}>Recent Matches (last 10)</h2>
      <table className="table">
        <thead><tr><th>Date</th><th>Result</th><th>Deck</th></tr></thead>
        <tbody>
          {mockMatches.slice(0,10).map((m,i)=> (
            <tr key={i}>
              <td>{m.date_played}</td>
              <td><span className={'icon '+m.result}/> {m.result}</td>
              <td>{m.snapshot.deck_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
