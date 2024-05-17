export interface Skill {
  color: string
  text: string
}

export interface Job {
  position: string
  employer: string
  period: string
  intro?: string
  experience?: string[]
  skills?: Skill[]
  country?: string
}
