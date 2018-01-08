import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
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
        }),
    }
];
