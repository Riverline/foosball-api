import { Module } from '@nestjs/common';
import {PlayersController} from "../Controllers/PlayersController";
import {DatabaseModule} from "./DatabaseModule";
import {playerProviders} from "../../Infrastructure/Persistence/TypeORM/PlayerProviders";

@Module({
    imports: [DatabaseModule],
    controllers: [PlayersController],
    components: [
        ...playerProviders
    ],
})
export class ApplicationModule {}
