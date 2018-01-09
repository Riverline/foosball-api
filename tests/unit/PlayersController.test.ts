import { Test } from '@nestjs/testing';
import {PlayersController} from "../../src/API/Application/Controllers/PlayersController";
import {playerProviders} from "../../src/API/Infrastructure/Persistence/TypeORM/PlayerProviders";
import {DatabaseModule} from "../../src/API/Application/Modules/DatabaseModule";

const mochaPlugin = require("serverless-mocha-plugin");
const expect = mochaPlugin.chai.expect;

describe('PlayersController', () => {
    let playersController: PlayersController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [DatabaseModule],
            controllers: [PlayersController],
            components: [...playerProviders],
        }).compile();

        playersController = module.get<PlayersController>(PlayersController);
    });

    describe('findAll', () => {
        it('should return an array of players', async () => {
            expect(await playersController.list()).to.not.be.empty;
        });
    });
});
