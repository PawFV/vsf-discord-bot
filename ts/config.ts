import { MapLike } from 'typescript'

export interface Command {
  description: string
  output?: string
}

export type Commands = MapLike<Command>
