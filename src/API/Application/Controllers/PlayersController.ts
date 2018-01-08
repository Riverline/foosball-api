import {Controller, Get, HttpCode, Inject, Post} from '@nestjs/common';
import {Player} from "../../Domain/Entity/Player.entity";
import { Repository } from 'typeorm';

@Controller('players')
export class PlayersController {

    constructor(@Inject('PlayerRepositoryToken') private readonly playerRepository: Repository<Player>) {}

    @HttpCode(201)
    @Post()
    create() {

    }

    @Get(':id')
    async getOne(): Promise<any> {
        return {};
    }

    @Get()
    async list(): Promise<any[]> {;
        return await this.playerRepository.find();
    }

}
