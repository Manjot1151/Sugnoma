import { Message } from 'discord.js';
import { Bot } from '../Bot';
import { Command } from "../commandhandler/Command"; 
import { CommandType } from '../commandhandler/CommandType';
import { CommandInterface } from '../typings';

export default class PingCommand extends Command implements CommandInterface {
    constructor() {
        super({
            name: "ping",
            help: "get bot ping",
            usage: "ping",
            type: CommandType.MISC
        })
    }

    execute(client: Bot, msg: Message) {
        msg.reply(`Ping: ${Date.now() - msg.createdTimestamp}`);
    } 
}
