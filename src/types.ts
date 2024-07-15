export interface Skill {
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

export interface Contact {
  text: string
  href: string
}
