import React from 'react'
import { mockDecks, mockMatches } from '@/lib/mock'
import { ManaPips } from '@/lib/mana'

export default function Dashboard(){
  const total = mockMatches.length
  const wins = mockMatches.filter(m=>m.result==='win').length
  const losses = total - wins
  const wr = total? Math.round((wins/total)*100):0

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="kpis">
        <div className="kpi"><div>Total Games</div><strong style={{fontSize:22}}>{total}</strong></div>
        <div className="kpi"><div>Wins</div><strong style={{fontSize:22}}>{wins}</strong></div>
        <div className="kpi"><div>Losses</div><strong style={{fontSize:22}}>{losses}</strong></div>
        <div className="kpi"><div>Win Rate</div><strong style={{fontSize:22}}>{wr}%</strong></div>
      </div>

      <h2>Decks</h2>
      <div className="grid decks">
        {mockDecks.map(d=>(
          <div key={d.id} className="card">
            <div style={{fontWeight:700, marginBottom:6}}>{d.name}</div>
            <ManaPips colors={d.color_identity}/>
            <div className="badge" style={{marginTop:6}}>{d.archived? 'Archived':'Active'}</div>
          </div>
        ))}
      </div>

      <h2 style={{marginTop:24}}>Recent Matches</h2>
      <table className="table">
        <thead><tr><th>Date</th><th>Result</th><th>Deck</th></tr></thead>
        <tbody>
          {mockMatches.map((m,i)=> (
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
