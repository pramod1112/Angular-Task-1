export class shopping {
    constructor(
        public img: string | File,
        public pName: string,
        public rate: number | string,
        public quantity: number | string = 1
    ) { }
}