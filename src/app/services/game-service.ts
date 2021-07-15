import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Player } from '../models/player-model';
import { Card } from '../models/card-model';
import { Deck } from '../models/deck-model';
import { HttpService } from './http-service';

@Injectable({ providedIn: 'root' })
export class GameService implements OnDestroy {

    constructor(private httpService: HttpService) { }

    deck: Deck | any;
    newDeckSub$: any;
    card: Card | any;
    cardSub$: any;
    drawnCard: Card;
    communityCards: Card[] = [];
    players: Player[] = [
        {
            name: 'P1',
            cards: [],
            id: 'p1',
            img: '',
            blind: {
                isDealer: false,
                isSmallBlind: false,
                isBigBlind: false
            },
            isTurn: false,
            coins: {
                total: 25000,
                bet: 0,
                won: 0
            }
        },
        {
            name: 'P2',
            cards: [],
            id: 'p2',
            img: '',
            blind: {
                isDealer: false,
                isSmallBlind: false,
                isBigBlind: false
            },
            isTurn: false,
            coins: {
                total: 25000,
                bet: 0,
                won: 0
            }
        },
        {
            name: 'P3',
            cards: [],
            id: 'p3',
            img: '',
            blind: {
                isDealer: false,
                isSmallBlind: false,
                isBigBlind: true
            },
            isTurn: false,
            coins: {
                total: 25000,
                bet: 0,
                won: 0
            }
        },
        {
            name: 'P4',
            cards: [],
            id: 'p4',
            img: '',
            blind: {
                isDealer: false,
                isSmallBlind: true,
                isBigBlind: false
            },
            isTurn: false,
            coins: {
                total: 25000,
                bet: 0,
                won: 0
            }
        },
        {
            name: 'P5',
            cards: [],
            id: 'p5',
            img: '',
            blind: {
                isDealer: true,
                isSmallBlind: false,
                isBigBlind: false
            },
            isTurn: false,
            coins: {
                total: 25000,
                bet: 0,
                won: 0
            }
        },
        {
            name: 'P6',
            cards: [],
            id: 'p6',
            img: '',
            blind: {
                isDealer: false,
                isSmallBlind: false,
                isBigBlind: false
            },
            isTurn: false,
            coins: {
                total: 25000,
                bet: 0,
                won: 0
            }
        }

    ];

    setCommunityCards() {
        for (let i = 0; i < 5; i++) {
            this.communityCards.push({
                code: 'communityCard',
                image: 'assets/img/playing-card.png'
            })
        };
    }

    dealCards() {
        setTimeout(() => {
            let dealtCards = 0;
            while (dealtCards < 2) {
                this.players.forEach(player => {
                    this._drawCard({ key: 'dealCards', value: player });
                });
                dealtCards++;
            }
        }, 3000);
        return this.players;
    }

    _drawCard(caseCardDrawn: { key: string, value }) {
        this.cardSub$ = this.httpService.drawCard(this.deck);
        this.cardSub$.subscribe(res => {
            this.card = res.cards[0];
            switch (caseCardDrawn.key) {
                case 'dealCards':
                    caseCardDrawn.value.cards.push(this.card);
                    break;
                case 'communityCard':
                    this.communityCards[caseCardDrawn.value] = this.card;
                default:
                    console.log('default');
                    break;
            }
        })
    }

    setNewDeck() {
        this.newDeckSub$ = this.httpService.getNewDeckSub$();
        this.newDeckSub$.subscribe(deck => {
            this.deck = deck;
        })
    }

    openCommunityCard(round) {
        if (round = 'flop') {
            for (let i = 0; i < 3; i++) {
                this._drawCard({ key: 'communityCard', value: i })
            }
        } else if (round = 'turn') {
            this._drawCard({ key: 'communityCard', value: 3 })
        } else if (round = 'river') {
            this._drawCard({ key: 'communityCard', value: 4 })
        } else {
            return // end round
        }
    }

    ngOnDestroy() {
        this.cardSub$.unsubscribe();
        this.newDeckSub$.unsubscribe();
    }
}


// OPEN COMMUNITY CARDS