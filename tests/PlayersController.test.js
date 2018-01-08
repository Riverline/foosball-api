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
const testing_1 = require("@nestjs/testing");
const PlayersController_1 = require("../src/API/Application/Controllers/PlayersController");
const PlayerProviders_1 = require("../src/API/Infrastructure/Persistence/TypeORM/PlayerProviders");
const DatabaseModule_1 = require("../src/API/Application/Modules/DatabaseModule");
const mochaPlugin = require("serverless-mocha-plugin");
const expect = mochaPlugin.chai.expect;
describe('PlayersController', () => {
    let playersController;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            imports: [DatabaseModule_1.DatabaseModule],
            controllers: [PlayersController_1.PlayersController],
            components: [...PlayerProviders_1.playerProviders],
        }).compile();
        playersController = module.get(PlayersController_1.PlayersController);
    }));
    describe('findAll', () => {
        it('should return an array of cats', () => __awaiter(this, void 0, void 0, function* () {
            // const result = ['test'];
            // jest.spyOn(playerRepository, 'find').mockImplementation(() => result);
            // expect(await playersController.list()).toBe(result);
            expect(yield playersController.list()).to.not.be.empty;
        }));
    });
});
