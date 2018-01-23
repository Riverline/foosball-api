import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: 3306,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            // host: 'sql1.cnl8tezdzsvh.eu-west-1.rds.amazonaws.com',
            // host: 'mysqld',
            // username: 'foosball_user',
            // password: 'ksVN4jws8uB5wqRY',
            // database: 'foosball',
            entities: [
                // __dirname + '/../**/*.entity{.ts,.js}',
                // __dirname + '/../../../Domain/Entity/*.entity{.ts,.js}',
                __dirname + '/Entity/*.entity{.ts,.js}',
            ],
            synchronize: false
        }),
    }
];
