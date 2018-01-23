import {PlayerInterface} from "../Entity/PlayerInterface";

export interface PlayerRepositoryInterface
{
    create(firstname: string, lastname: string);

    getById(id: string): Promise<PlayerInterface>;

    getAll(): Promise<PlayerInterface[]>;

    save(player: PlayerInterface): Promise<PlayerInterface>;

}
