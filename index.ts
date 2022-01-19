import { Bot } from './Bot';
import { token } from './config.json';

const client = new Bot({intents: ['GUILDS', 'GUILD_MESSAGES'], failIfNotExists: false, allowedMentions: {repliedUser: false}})
client.setup()
client.login(token)

const prefix = '*' 
client.on('messageCreate', (msg) => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.split(" ")
    const commandName = args[0].substring(prefix.length)
    args.shift()

    const command = client.commands.find(cmd => cmd.name == commandName)
    if (!command) return;

    command.execute(client, msg, args)
})

client.on('ready', () => {
    console.log('Hello!')
})