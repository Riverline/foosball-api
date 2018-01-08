import { Connection, Repository } from 'typeorm';
import {Player} from "../../../Domain/Entity/Player.entity";

export const playerProviders = [
    {
        provide: 'PlayerRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Player),
        inject: ['DbConnectionToken'],
    },
];
