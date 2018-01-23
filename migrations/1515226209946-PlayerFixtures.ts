import {MigrationInterface, QueryRunner} from "typeorm";

export class PlayerFixtures1515226209946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO player (firstname, lastname, status) VALUES ('john', 'smith', 'active')`);
        await queryRunner.query(`INSERT INTO player (firstname, lastname, status) VALUES ('brad', 'ley', 'active')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM player WHERE firstname = 'john' AND lastname = 'smith'`);
        await queryRunner.query(`DELETE FROM player WHERE firstname = 'brad' AND lastname = 'ley'`);
    }

}
