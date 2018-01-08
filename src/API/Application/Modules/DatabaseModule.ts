import { Module } from '@nestjs/common';
import {databaseProviders} from "../../Infrastructure/Persistence/TypeORM/DatabaseProviders";

@Module({
    components: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}
