import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import {CreatePlayerCommand} from "../../Domain/Command/CreatePlayerCommand";
import {Inject} from "@nestjs/common";
import {PlayerRepositoryInterface} from "../../Domain/Repository/PlayerRepositoryInterface";

@CommandHandler(CreatePlayerCommand)
export class CreatePlayerCommandHandler implements ICommandHandler<CreatePlayerCommand> {

    constructor(
        @Inject('PlayerRepositoryToken') private readonly playerRepository: PlayerRepositoryInterface,
        private readonly publisher: EventPublisher,
    ) {}

    async execute(command: CreatePlayerCommand, resolve: (value?) => void) {
        console.log('CreatePlayerCommand...Handler');

        let player = await this.playerRepository.create(command.firstname, command.lastname);

        // @TODO : add validation

        await this.playerRepository.save(player);

        resolve(player);
    }
}
