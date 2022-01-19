import { Client, ClientOptions, Collection } from "discord.js";
import { CommandClass, CommandInterface } from "./typings";
import { readdirSync } from 'fs';

export class Bot extends Client<true> {
    public commands: Collection<string, CommandInterface>; 

    constructor(options: ClientOptions) {
        super(options);
        this.commands = new Collection()
    }

    async setup() {
        const commandFiles = readdirSync('commands').filter(file => file.toString().endsWith('.ts'));
        for (const file of commandFiles) {
            const commandFile = await import(`./commands/${file}`) as { default: CommandClass }
            const command: CommandInterface = new commandFile.default()
            this.commands.set(command.name, command);
        }
    }
}