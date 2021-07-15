import { Blind } from "./blind-model";
import { Card } from "./card-model";
import { Coins } from "./player-coins";

export class Player {
    constructor(
        public name: string,
        public cards: Array<Card>,
        public id: string,
        public blind: Blind,
        public img: string,
        public isTurn: boolean,
        public coins: Coins
    ) { }
}