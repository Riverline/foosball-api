import { Connection, Repository } from 'typeorm';
import {Player} from "./Entity/Player.entity";
import {PlayerRepository} from "./Repository/PlayerRepository";

export const playerProviders = [
    {
        provide: 'PlayerRepositoryToken',
        useFactory: (connection: Connection) => {
            return new PlayerRepository(connection.getRepository(Player))
        },
        inject: ['DbConnectionToken'],
    },
];
