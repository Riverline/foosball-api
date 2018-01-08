
**WARNING : WORK IN PROGRESS SIDE PROJECT**


## TypeORM

Sync Mysql schema (Docker)

    docker-compose exec app ts-node ./node_modules/.bin/typeorm schema:log -f config/ormconfig -c default
    docker-compose exec app ts-node ./node_modules/.bin/typeorm schema:sync -f config/ormconfig -c default
    
Create a migration

    ./node_modules/.bin/typeorm migrations:create -n PlayerFixtures -f config/ormconfig -c default

Run a migration (Docker)

    docker-compose exec app ts-node ./node_modules/.bin/typeorm migrations:run -f config/ormconfig -c default

## Tests
    
Run tests

    docker-compose exec app ./node_modules/.bin/mocha -r ts-node/register tests/**/*.ts
