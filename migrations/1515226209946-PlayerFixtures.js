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
class PlayerFixtures1515226209946 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`INSERT INTO player (firstname, lastname, status) VALUES ('Sebastien', 'Porati', 'active')`);
            yield queryRunner.query(`INSERT INTO player (firstname, lastname, status) VALUES ('Romain', 'Cambien', 'active')`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DELETE FROM player WHERE firstname = 'Sebastien' AND lastname = 'Porati'`);
            yield queryRunner.query(`DELETE FROM player WHERE firstname = 'Romain' AND lastname = 'Cambien'`);
        });
    }
}
exports.PlayerFixtures1515226209946 = PlayerFixtures1515226209946;
