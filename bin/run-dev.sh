#/bin/bash
docker-compose up -d

## Create and populate Mysql Database
docker-compose exec app ts-node ./node_modules/.bin/typeorm schema:sync -f config/ormconfig -c default
docker-compose exec app ts-node ./node_modules/.bin/typeorm migrations:run -f config/ormconfig -c default

## Create and populate DynamoDB tables
serverless dynamodb migrate
serverless dynamodb seed --seed=dev
