import {PlayerRepositoryInterface} from "../../../../Domain/Repository/PlayerRepositoryInterface";
import {Player} from "../../TypeORM/Entity/Player.entity";
import {PlayerInterface} from "../../../../Domain/Entity/PlayerInterface";
import {Component} from "@nestjs/common";
import * as AWS from "aws-sdk";

@Component()
export class DynamoDBPlayerRepository implements PlayerRepositoryInterface {

    private dynamoDBClient: AWS.DynamoDB.DocumentClient;

    private tableName: string;

    constructor () {
        this.dynamoDBClient = new AWS.DynamoDB.DocumentClient({
            region: process.env.VKC_AWS_REGION,
            endpoint: process.env.DYNAMODB_ENDPOINT
        });

        this.tableName = process.env.DYNAMODB_ITEMS_TABLE;
    }

    create(firstname: string, lastname: string) {
        return new Player(firstname, lastname);
    }

    async getById(id: string): Promise<PlayerInterface> {


        return null;
    }

    async getAll(): Promise<PlayerInterface[]> {
        return [];
    }

    async save(player: PlayerInterface): Promise<PlayerInterface> {
        let params = {
            TableName: this.tableName,
            Item: {
                uuid: player.getUuid(),
                firstname: player.getFirstname(),
                lastname: player.getLastname(),
                status: player.getStatus(),
            },
            ReturnValues: 'ALL_OLD'
        };

        await this.dynamoDBClient.put(params).promise();

        return player;
    }
}
