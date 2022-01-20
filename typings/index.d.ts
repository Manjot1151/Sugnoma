import { Message } from "discord.js";
import { Bot } from "../Bot";
import { CommandType } from "./enums";

export interface CommandClass extends CommandInterface {
    new ()
}

export interface CommandInterface extends CommandOptions {
    execute(client: Bot, msg: Message, args: string[]): void
}

export interface CommandOptions {
    help: string
    name: string
    usage: string
    type: CommandType
}