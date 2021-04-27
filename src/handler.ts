import Discord from 'discord.js'
import config from '../config'

const handler = (msg: Discord.Message) => {
  return {
    reply: (content: string) => msg.reply(content),
    run: (arg: string) => msg.reply(config.commands[arg].output)
  }
}

export default handler
