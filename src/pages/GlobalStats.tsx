import React from 'react'
import { mockMatches } from '@/lib/mock'
export default function GlobalStats(){
  const total = mockMatches.length
  const wins = mockMatches.filter(m=>m.result==='win').length
  const losses = total - wins
  const wr = total? Math.round((wins/total)*100):0
  return (
    <div>
      <h1>Global Stats</h1>
      <div className="kpis">
        <div className="kpi"><div>Total Games</div><strong style={{fontSize:22}}>{total}</strong></div>
        <div className="kpi"><div>Wins</div><strong style={{fontSize:22}}>{wins}</strong></div>
        <div className="kpi"><div>Losses</div><strong style={{fontSize:22}}>{losses}</strong></div>
        <div className="kpi"><div>Win Rate</div><strong style={{fontSize:22}}>{wr}%</strong></div>
      </div>
      <div className="card">Timeline (Cumulative WR%) — add chart library later.</div>
    </div>
  )
}
