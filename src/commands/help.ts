import { Message } from 'discord.js';
import { Bot } from '../Bot';
import { Command } from "../Command"; 
import { CommandInterface } from '../typings';
import { CommandType } from '../typings/enums';

export default class PingCommand extends Command implements CommandInterface {
    constructor() {
        super({
            name: "help",
            help: "stop it get some help",
            usage: "help (command)",
            type: CommandType.HELP
        })
    }

    execute(client: Bot, msg: Message, args: string[]) {
        const commands = client.commands;
        
        if (args.length == 0) {
            let reply = "";
            commands.forEach(cmd => {
                reply += `**${cmd.name}**, `
            });
            reply = reply.substring(0, reply.length - 2)
            msg.reply(reply);
            return;
        }

        let command = commands.find(cmd => cmd.name == args[0])
        if (!command) {
            msg.reply(`Command \`${args[0]}\` does not exist!`)
            return;
        }

        msg.reply(`**${command.name}**\nHelp: ${command.help}\nUsage: ${command.usage}\nType: ${command.type}`);
    }
}
