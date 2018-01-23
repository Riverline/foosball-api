import {PlayerInterface} from "../../../../Domain/Entity/PlayerInterface";
import * as Uuid from "uuid";
import {PlayerStatus} from "../../../../Domain/Enum/PlayerStatus";

export class PlayerItem implements PlayerInterface {

    private uuid: string;

    private firstname: string;

    private lastname: string;

    private status: string = PlayerStatus.Active;

    constructor (firstname: string, lastname: string) {
        this.uuid = Uuid.v1();
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static createFromItem(item): PlayerItem {
        return {
            uuid: item.uuid,
            firstname: item.firstname,
            lastname: item.lastname,
            status: item.status
        };
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
