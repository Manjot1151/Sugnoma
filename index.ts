import { Bot } from './Bot';
import { token } from './config.json';

const client = new Bot({intents: ['GUILDS', 'GUILD_MESSAGES'], failIfNotExists: false, allowedMentions: {repliedUser: false}}, '*')
client.setup()
client.login(token)

client.on('messageCreate', (msg) => {
    if (!msg.content.startsWith(client.prefix)) return;

    const args = msg.content.split(" ")
    const commandName = args[0].substring(client.prefix.length)
    args.shift()

    const command = client.commands.find(cmd => cmd.name == commandName)
    if (!command) return;

    command.execute(client, msg, args)
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}...`)
})