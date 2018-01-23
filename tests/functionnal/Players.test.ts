import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import {DatabaseModule} from "../../src/API/Application/Modules/DatabaseModule";
import {PlayersController} from "../../src/API/Application/Controllers/PlayersController";
import {playerProviders} from "../../src/API/Infrastructure/Persistence/TypeORM/PlayerProviders";

// import {expect} from "chai";
// import {expect} from "chai-http";

import chai = require('chai');
import ChaiHttp = require('chai-http');
import {PlayerStatus} from "../../src/API/Domain/Enum/PlayerStatus";

describe('Players', () => {
    // const server = express();

    chai.use(ChaiHttp);

    let agent = chai.request('http://localhost:3000');

    // before(async () => {});

    it(`/GET players`, (done) => {
        agent
            .get('/players')
            .then((result) => {
                chai.expect(result)
                    .to.have.status(200)
                    .to.have.header('content-type', 'application/json; charset=utf-8')
                    .to.be.json;;

                chai.expect(result.body).to.be.an('array');
                chai.expect(result.body).to.have.lengthOf.at.least(2);

                chai.expect(result.body[0].firstname).to.be.eq('john');
                chai.expect(result.body[0].lastname).to.be.eq('smith');
                chai.expect(result.body[0].status).to.be.eq(PlayerStatus.Active);

                chai.expect(result.body[1].firstname).to.be.eq('brad');
                chai.expect(result.body[1].lastname).to.be.eq('ley');
                chai.expect(result.body[1].status).to.be.eq(PlayerStatus.Active);
                //
                // chai.expect(result.body).to.deep.include({
                //     id: 1,
                //     firstname: 'john',
                //     lastname: 'smith',
                //     status: 'active'
                // });
                // chai.expect(result.body).to.deep.include({
                //     id: 2,
                //     firstname: 'brad',
                //     lastname: 'ley',
                //     status: 'active'
                // });

                done();
            });
    });

    it(`/GET player 1`, (done) => {
        agent
            .get('/players/1')
            .then((result) => {
                chai.expect(result).to.have.status(200);

                chai.expect(result.body.id).to.be.eq(1);
                chai.expect(result.body.firstname).to.be.eq('john');
                chai.expect(result.body.lastname).to.be.eq('smith');
                chai.expect(result.body.status).to.be.eq('active');

                done();
            });
    });

    it(`/POST players (Bad request)`, (done) => {
        agent
            .post('/players')
            .then(() => {})
            .catch((error) => {
                chai.expect(error.response).to.have.status(400);
                done();
            })
        ;
    });

    it(`/POST players`, (done) => {
        agent
            .post('/players')
            .send({ firstname: 'Billy', lastname: 'James' })
            .then((response) => {
                chai.expect(response).to.have.status(201);
                done();
            });
    });

});
