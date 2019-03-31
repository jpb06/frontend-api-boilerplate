import { ObjectId } from 'bson';

/* ---------------------------------------------------------------------------------------------------------------
   User = aggregation between user and roles
   ---------------------------------------------------------------------------------------------------------------*/
export class User {
    id: ObjectId;
    roles: Array<string>;

    lastname: string;
    firstname: string;
    email: string;
    hashedPassword: string;
}