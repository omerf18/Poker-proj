import { Card } from "./card-model";

export class Deck {
    constructor(
        public success: boolean,
        public deck_id: string, 
        public shuffled:boolean,
        public remaining: number
    ) { }
}
