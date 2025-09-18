export type UUID = string;
export type PairingType = 'PARTNER'|'PARTNER_WITH'|'BACKGROUND'|null;
export type Result = 'win'|'loss';
export type Color = 'W'|'U'|'B'|'R'|'G'|'C';
export interface Profile { id: UUID; username: string; email?: string; display_name?: string; public_profile: boolean; }
export interface Deck { id: UUID; user_id: UUID; name: string; commander_primary: string; commander_secondary?: string | null; pairing_type?: PairingType; color_identity: Color[]; tags?: string[]; notes?: string; archived: boolean; archived_note?: string | null; created_at: string; updated_at: string; }
export interface Match { id: UUID; user_id: UUID; deck_id: UUID; date_played: string; result: Result; pod_size?: number | null; location?: string | null; note?: string | null; note_public: boolean; snapshot: { deck_name: string; commanders: string[]; colors: Color[]; }; created_at: string; updated_at: string; }