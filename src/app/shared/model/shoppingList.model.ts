import { v4 as uuid } from 'uuid';
export class shopping {
    constructor(
        public img: string | File,
        public pName: string,
        public rate: number,
        public quantity?: number,
        public id? :any
    ) {
        this.quantity = 1;
        this.id = uuid();
     }
}