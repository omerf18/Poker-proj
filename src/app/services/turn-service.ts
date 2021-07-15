import { Injectable } from "@angular/core";
import { Player } from "../models/player-model";

@Injectable({ providedIn: 'root' })
export class PlayTurnService {

    currBet: number = 0;

    playTurn(player: Player) {
        if (player.isTurn) {
            let action: string | null;
            if (player.coins.bet === this.currBet) {
                // player can --- check / raise / fold / bluff
            }
            if (player.coins.bet < this.currBet) {
                // player can --- call / raise / fold / bluff
            }
            // SET ACTION
            switch (action) {
                case 'check':
                    this._check();
                    break;
                case 'call':
                    this._call();
                    break;
                case 'raise':
                    this._raise();
                    break;
                case 'fold':
                    this._fold();
                    break;
                case 'bluff':
                    this._bluff();
                    break;
                default:
                    console.log('Time is up!');
                // code block
                // check or fold if time runs out
            }
        }
    }

    setRoundBet(newBet: number) {
        this.currBet = newBet;
    }

    _call() {
        console.log('call');
    }

    _raise() {
        console.log('raise');
    }

    _check() {
        console.log('check');
    }

    _fold() {
        console.log('fold');
    }

    _bluff() {
        console.log('bluff');
    }
}