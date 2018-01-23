
**WARNING : WORK IN PROGRESS SIDE PROJECT**


## TypeORM (SQL)

Sync Mysql schema (Docker)

    docker-compose exec app ts-node ./node_modules/.bin/typeorm schema:log -f config/ormconfig -c default
    docker-compose exec app ts-node ./node_modules/.bin/typeorm schema:sync -f config/ormconfig -c default
    
Create a migration

    ./node_modules/.bin/typeorm migrations:create -n PlayerFixtures -f config/ormconfig -c default

Run a migration (Docker)

    docker-compose exec app ts-node ./node_modules/.bin/typeorm migrations:run -f config/ormconfig -c default

## DynamoDB

## Create and populate DynamoDB tables

    serverless dynamodb migrate
    serverless dynamodb seed --seed=dev

## Tests
    
Run tests (on Docker)

    docker-compose exec app ./node_modules/.bin/mocha -r ts-node/register tests/**/*.ts
    docker-compose exec app yarn test:test
    
    
##
## TODO
##

[] Centralize SQL/configuration (serverless plugin to export env vars from yml into lambda)
[] Configuration by env
[] Fixtures by env (test)
[] Integrate in Gitlab

[X] Model interfaces
[X] TypeORM repository
[] DynamoDB implementation
