import { User } from "./user.model";

export class Register{
    user:User;
    constructor(){
        this.user = new User();
    }
}