import { Message } from 'discord.js';
import { Bot } from '../Bot';
import { Command } from "../commandhandler/Command"; 
import { CommandInterface } from '../typings';

export default class PingCommand extends Command implements CommandInterface {
    constructor() {
        super({
            name: "ping",
            help: "get bot ping",
            usage: "ping"
        })
    }

    execute(client: Bot, msg: Message) {
        msg.reply(`Ping: ${Date.now() - msg.createdTimestamp}`);
    } 
}
