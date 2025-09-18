import React from 'react'
import type { Color } from './types'
const LABELS: Record<Color,string> = { W:'W', U:'U', B:'B', R:'R', G:'G', C:'◇' }
export function ManaPips({ colors }: { colors: Color[] }) {
  return (<div className="pips">{colors.length===0? <span className="pip C">◇</span> : colors.map(c => <span key={c} className={'pip '+c}>{LABELS[c]}</span>)}</div>)
}