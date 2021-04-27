require('dotenv').config()
import Discord from 'discord.js'
import { Args } from './src/args'

const bot = new Discord.Client()
const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
  const Arg = new Args(msg)

  if (Arg.isVsfCommand()) {
    Arg.initCli()
  }
})
