import commands, { getHelp } from '../config/commands'
import { get } from 'lodash'
import handler from './handler'
import Discord from 'discord.js'
import { Command } from '../ts/config'
import yargs from 'yargs'

const cli = (arg: string, opts = null, msg: Discord.Message) => {
  return {
    /** Verifies if key of command exists in available commands, if not will execute default error. */
    start: () => {
      const command: Command = get(commands, arg, null)
      const handle = handler(msg)
      return command ? handle.run(arg) : msg.reply(getHelp())
    }
  }
}

export default cli
