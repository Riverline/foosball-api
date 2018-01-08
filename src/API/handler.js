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
const core_1 = require("@nestjs/core");
const { createServer, proxy } = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const express = require("express");
const ApplicationModule_1 = require("./Application/Modules/ApplicationModule");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new express();
        const server = yield core_1.NestFactory.create(ApplicationModule_1.ApplicationModule, app);
        // server.useGlobalPipes(new ValidationPipe());
        yield server.init();
        return app;
    });
}
exports.bootstrap = bootstrap;
const getApp = bootstrap()
    .then(app => {
    app.use(awsServerlessExpressMiddleware.eventContext());
    return app;
})
    .then(createServer)
    .catch(error => console.error(error));
const app = (event, context) => getApp
    .then(server => proxy(server, event, context))
    .catch(error => context.fail(JSON.stringify(error)));
exports.index = app;
