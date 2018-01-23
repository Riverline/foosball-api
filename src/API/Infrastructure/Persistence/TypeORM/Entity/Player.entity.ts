import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {PlayerInterface} from "../../../../Domain/Entity/PlayerInterface";
import {PlayerStatus} from "../../../../Domain/Enum/PlayerStatus";
import * as Uuid from "uuid";

@Entity()
export class Player implements PlayerInterface {

    @PrimaryGeneratedColumn()
    id: number;

    uuid: string;

    @Column({ length: 50 })
    firstname: string;

    @Column({ length: 50 })
    lastname: string;

    @Column({ length: 15 })
    status: string = PlayerStatus.Active;

    constructor (firstname: string, lastname: string) {
        this.uuid = Uuid.v1();
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFirstname() {
        return this.firstname;
    }

    getLastname() {
        return this.lastname;
    }

    getStatus() {
        return this.status;
    }

    getUuid() {
        return this.uuid;
    }

    isActive() {
        return this.getStatus() == PlayerStatus.Active;
    }

}
