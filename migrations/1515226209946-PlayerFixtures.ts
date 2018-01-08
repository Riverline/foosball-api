import {MigrationInterface, QueryRunner} from "typeorm";

export class PlayerFixtures1515226209946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO player (firstname, lastname, status) VALUES ('John', 'Smith', 'active')`);
        await queryRunner.query(`INSERT INTO player (firstname, lastname, status) VALUES ('Brad', 'ley', 'active')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM player WHERE firstname = 'John' AND lastname = 'Smith'`);
        await queryRunner.query(`DELETE FROM player WHERE firstname = 'Brad' AND lastname = 'ley'`);
    }

}
