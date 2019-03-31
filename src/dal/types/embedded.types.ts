import { ObjectId } from "bson";

/* ---------------------------------------------------------------------------------------------------------------
   Payload / Used in Session
   ---------------------------------------------------------------------------------------------------------------*/
export class Payload {
    lastname: string;
    firstname: string;
    email: string;
    roles: Array<string>;
    expirationDate: string;

    constructor(
        lastname: string,
        firstname: string,
        email: string,
        roles: Array<string>,
        expirationDate: string
    ) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.roles = roles;
        this.expirationDate = expirationDate;
    }
}