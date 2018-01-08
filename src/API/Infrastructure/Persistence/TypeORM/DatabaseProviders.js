"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.createConnection({
                type: 'mysql',
                host: 'mysqld',
                port: 3306,
                username: 'foosball_user',
                password: 'ksVN4jws8uB5wqRY',
                database: 'foosball',
                entities: [
                    // __dirname + '/../**/*.entity{.ts,.js}',
                    __dirname + '/../../../Domain/Entity/*.entity{.ts,.js}',
                ],
                synchronize: false
            });
        }),
    }
];
