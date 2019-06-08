import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1560005647625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "note" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text, "content_type" tinyint DEFAULT (1), "done" boolean NOT NULL DEFAULT (1))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
