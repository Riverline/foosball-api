"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_entity_1 = require("../../../Domain/Entity/Player.entity");
exports.playerProviders = [
    {
        provide: 'PlayerRepositoryToken',
        useFactory: (connection) => connection.getRepository(Player_entity_1.Player),
        inject: ['DbConnectionToken'],
    },
];
