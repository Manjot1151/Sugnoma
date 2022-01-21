import { Message } from 'discord.js';
import { Bot } from '../Bot';
<<<<<<< HEAD:commands/ping.ts
import { Command } from "../commandhandler/Command"; 
=======
import { Command } from "../Command"; 
>>>>>>> 0b04de1009a470b6b428cd9bc9266652cf62e1bd:src/commands/ping.ts
import { CommandInterface} from '../typings';
import { CommandType } from '../typings/enums';

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
