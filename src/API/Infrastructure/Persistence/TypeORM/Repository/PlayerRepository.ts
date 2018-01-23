import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import {PlayerRepositoryInterface} from "../../../../Domain/Repository/PlayerRepositoryInterface";
import {Player} from "../Entity/Player.entity";
import {PlayerInterface} from "../../../../Domain/Entity/PlayerInterface";

@Component()
export class PlayerRepository implements PlayerRepositoryInterface {

    constructor(
        @Inject('PlayerRepositoryToken') private readonly repository: Repository<Player>) {}


    create(firstname: string, lastname: string) {
        return new Player(firstname, lastname);
    }

    async getById(id: string): Promise<PlayerInterface> {
        return await this.repository.findOneById(id);
    }

    async getAll(): Promise<PlayerInterface[]> {
        return await this.repository.find();
    }

    async save(player: PlayerInterface): Promise<PlayerInterface> {
        return await this.repository.save(player);
    }
}
