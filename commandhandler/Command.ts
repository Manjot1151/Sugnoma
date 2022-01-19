import { CommandOptions } from "../typings";

export class Command {
    public name: string;
    public description: string;
    public help: string;
    public usage: string;

    constructor({ name, help, usage }: CommandOptions) {
        this.name = name;
        this.help = help;
        this.usage = usage;
    }
}