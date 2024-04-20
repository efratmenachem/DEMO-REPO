export class user {
    currUser: any;
    constructor(
        public name?: string,
        public password?: string,
        public email?: string,
        public phone?: string,
        public isManager?: boolean, 
        public visited?: Array<string>
    ) {}
}
