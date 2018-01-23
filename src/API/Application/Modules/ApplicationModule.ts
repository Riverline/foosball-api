import {Module, OnModuleInit} from '@nestjs/common';
import {PlayersController} from "../Controllers/PlayersController";
import {DatabaseModule} from "./DatabaseModule";
import {playerProviders} from "../../Infrastructure/Persistence/TypeORM/PlayerProviders";
import {CommandBus, CQRSModule, EventBus} from "@nestjs/cqrs";
import {ModuleRef} from "@nestjs/core";
import {CreatePlayerCommandHandler} from "../CommandHandlers/CreatePlayerCommandHandler";

@Module({
    imports: [CQRSModule, DatabaseModule],
    controllers: [PlayersController],
    components: [
        CreatePlayerCommandHandler,
        ...playerProviders
    ],
})
export class ApplicationModule implements OnModuleInit {

    constructor(
        private readonly moduleRef: ModuleRef,
        private readonly command$: CommandBus,
        private readonly event$: EventBus
    ) {}

    onModuleInit() {
        this.command$.setModuleRef(this.moduleRef);
        this.event$.setModuleRef(this.moduleRef);

        // this.event$.register(EventHandlers);
        this.command$.register([CreatePlayerCommandHandler]);
    }

}
