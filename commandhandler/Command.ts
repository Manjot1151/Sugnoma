import { CommandOptions } from "../typings";
import { CommandType } from "./CommandType";

export class Command {
    public name: string;
    public help: string;
    public usage: string;
    public type: CommandType;

    constructor({ name, help, usage, type }: CommandOptions) {
        this.name = name;
        this.help = help;
        this.usage = usage;
        this.type = type;
    }
}