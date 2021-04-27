import Discord from 'discord.js'
import { forEach, omit } from 'lodash'
import commands from '../config/commands'
import cli from './cli'

export class Args {
  msg: Discord.Message
  args: string[]

  constructor(msg: Discord.Message) {
    this.msg = msg
    this.args = this.msg.content.split(' ')
  }

  isVsfCommand() {
    return this.msg.content.split(' ')[0] === 'vsf'
  }

  initCli() {
    return cli(this.args[1], null, this.msg).start()
  }
}
