import React, { useState } from 'react'
import { mockDecks, mockMatches } from '@/lib/mock'

export default function LogMatch(){
  const [deckId, setDeckId] = useState(mockDecks[0]?.id ?? '')
  const [result, setResult] = useState<'win'|'loss'>('win')
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0,10))
  const [saved, setSaved] = useState(false)

  function save(e:React.FormEvent){
    e.preventDefault()
    setSaved(true)
    setTimeout(()=>setSaved(false), 2000)
  }

  return (
    <div>
      <h1>Log Match</h1>
      {saved && <div className="card" style={{borderColor:'var(--accent)'}}>Saved! (skeleton)</div>}
      <form onSubmit={save} className="grid" style={{maxWidth:560}}>
        <label>Deck<select className="input" value={deckId} onChange={e=>setDeckId(e.target.value)} required>
          {mockDecks.map(d=>(<option key={d.id} value={d.id}>{d.name}</option>))}
        </select></label>
        <label>Date<input className="input" type="date" required value={date} onChange={e=>setDate(e.target.value)} /></label>
        <label>Result<select className="input" value={result} onChange={e=>setResult(e.target.value as any)}>
          <option value="win">Win</option>
          <option value="loss">Loss</option>
        </select></label>
        <button className="btn" type="submit">Save Match</button>
      </form>
      <hr/>
      <h3>Recent (mock)</h3>
      <ul>
        {mockMatches.map((m,i)=>(<li key={i}>{m.date_played} — {m.result} — {m.snapshot.deck_name}</li>))}
      </ul>
    </div>
  )
}
