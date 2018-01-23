import {ICommand} from "@nestjs/cqrs";

export class CreatePlayerCommand implements ICommand {

    constructor(
        public readonly firstname: string,
        public readonly lastname: string
    ) {}

}
