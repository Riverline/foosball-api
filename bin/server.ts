import { NestFactory } from '@nestjs/core';
import {ApplicationModule} from "../src/API/Application/Modules/ApplicationModule";
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

let path = require('path');
let read = require('read-yaml');
let config = read.sync(path.dirname(__dirname) + '/config/secrets.dev.yml');

for (let k in config) {
    process.env[k] = config[k]
}

console.log(process.env);

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);

    // @TODO refactor for use in AWS Lambda

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    await app.listen(3000);
}
bootstrap();
