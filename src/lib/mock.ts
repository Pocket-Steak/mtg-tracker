import type { Deck, Match, Color } from './types'
function rid(){ return (crypto as any).randomUUID ? (crypto as any).randomUUID() : Math.random().toString(36).slice(2) }
const now = new Date().toISOString()
export const mockDecks: Deck[] = [
  { id: rid(), user_id: rid(), name:'Elfball Aggro', commander_primary:'Ezuri, Renegade Leader', commander_secondary:null, pairing_type: null, color_identity:['G' as Color], tags:['Aggro','Tokens'], notes:'Go wide + overrun.', archived:false, archived_note:null, created_at: now, updated_at: now },
  { id: rid(), user_id: rid(), name:'Angel Tempo', commander_primary:'Giada, Font of Hope', commander_secondary:null, pairing_type: null, color_identity:['W' as Color], tags:['Tempo'], notes:'Tapdown + flyers.', archived:false, archived_note:null, created_at: now, updated_at: now }
]
export const mockMatches: Match[] = [
  { id: rid(), user_id: mockDecks[0].user_id, deck_id: mockDecks[0].id, date_played: new Date().toISOString().slice(0,10), result:'win', pod_size:4, location:'LGS', note:'Craterhoof finish 😎', note_public:false, snapshot:{ deck_name: mockDecks[0].name, commanders:[mockDecks[0].commander_primary], colors: mockDecks[0].color_identity }, created_at: now, updated_at: now },
  { id: rid(), user_id: mockDecks[1].user_id, deck_id: mockDecks[1].id, date_played: new Date().toISOString().slice(0,10), result:'loss', pod_size:4, location:'Kitchen table', note:'Mana screwed', note_public:false, snapshot:{ deck_name: mockDecks[1].name, commanders:[mockDecks[1].commander_primary], colors: mockDecks[1].color_identity }, created_at: now, updated_at: now }
]