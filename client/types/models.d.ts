import { SessionLocation, Session, Sessions } from '@/types/api'
export interface Provider {
  // columns
  id: number
  user_id: number
  avatar?: string
  name: string
  payload: string
  created_at?: Date
  updated_at?: Date
}
export type Providers = Array<Provider>

export interface User {
  // columns
  id: number
  email: string
  name?: string
  avatar?: string
  stripe?: string
  is_sub: boolean
  created_at?: Date
  updated_at?: Date
  // mutators
  is_trial: boolean
  first_name: string
  has_active_session: boolean
  session: Session
  location: SessionLocation
  // relations
  providers: Providers
  sessions: Sessions
}
export type Users = Array<User>
