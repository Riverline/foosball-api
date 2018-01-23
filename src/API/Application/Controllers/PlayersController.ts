import {BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Inject, NotFoundException, Param, Post, Response} from '@nestjs/common';
import {isNullOrUndefined} from "util";
import {CreatePlayerDto} from "./Dto/CreatePlayerDto";
import {CommandBus} from "@nestjs/cqrs";
import {CreatePlayerCommand} from "../../Domain/Command/CreatePlayerCommand";
import {PlayerRepositoryInterface} from "../../Domain/Repository/PlayerRepositoryInterface";

@Controller('players')
export class PlayersController {

    constructor(
        @Inject('PlayerRepositoryToken') private readonly playerRepository: PlayerRepositoryInterface,
        private readonly commandBus: CommandBus
    ) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    public async createUser(@Body() createPlayerDto: CreatePlayerDto) {
        console.log(createPlayerDto);

        // @TODO : revamp validation
        if (isNullOrUndefined(createPlayerDto.firstname) || isNullOrUndefined(createPlayerDto.lastname)) {
            throw new BadRequestException();
        }

        let player = await this.commandBus.execute(
            new CreatePlayerCommand(createPlayerDto.firstname, createPlayerDto.lastname),
        );

        console.log(player);

        return player;
    }

    @Get(':id')
    async getOne(@Param('id') id): Promise<any> {
        let player = await this.playerRepository.getById(id);

        if (isNullOrUndefined(player)) {
            throw new NotFoundException();
        }

        return player;
    }

    @Get()
    async list(): Promise<any[]> {
        return await this.playerRepository.getAll();
    }

}
