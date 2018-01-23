import {NestFactory} from "@nestjs/core";

const { createServer, proxy } = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

import * as express from "express";
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// import {ValidationPipe} from "@nestjs/common";
import {ApplicationModule} from "./Application/Modules/ApplicationModule";

console.log(process.env);

export async function bootstrap() {
    const app = new express();
    const server = await NestFactory.create(ApplicationModule, app);

    // server.useGlobalPipes(new ValidationPipe());

    await server.init();

    return app;
}

const getApp = bootstrap()
    .then(app => {
        app.use(awsServerlessExpressMiddleware.eventContext());

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cors());

        return app;
    })
    .then(createServer)
    .catch(error => console.error(error));

const app = (event, context) =>
    getApp
        .then(server => proxy(server, event, context))
        .catch(error => context.fail(JSON.stringify(error)));

exports.index = app;
