import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player-model';
import { GameService } from 'src/app/services/game-service';
import { PlayTurnService } from '../../services/turn-service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() players: Player[];
  dealerMsg: string = '';
  isDealerMsg: boolean = false;
  isGameOn: boolean = false;
  openedCommunityCards: number = 0;
  round: string = '1stRound';
  communityCards = 5;

  constructor(
    private gameService: GameService,
    private playTurnService: PlayTurnService
  ) { }

  ngOnInit(): void {
    this.gameService.setCommunityCards();
    setTimeout(() => {
      this._editDealerMsg('Dealing cards..');
      setTimeout(() => {
        this._clearDealaerMsg();
        setTimeout(() => {
          this.startGame();
        }, 1000);
      }, 5000);
    }, 1000);
  }

  startGame() {
    this.isGameOn = true;
    this._startNewRound();
  }

  _startNewRound() {
    this._openCommunityCards();
    // check if round is finished
    for (let i = 0; i < this.players.length; i++) {
      let currPlayer = this.players[i];
      if (currPlayer.blind.isSmallBlind) {
        this._placeBet(currPlayer, 500);
      }
      if (currPlayer.blind.isBigBlind) {
        this._placeBet(currPlayer, 1000);
        if (i - 1 === -1) {
          this._getPlayerTurn(this.players[this.players.length - 1]);
        } else {
          this._getPlayerTurn(this.players[i - 1]);
        }
      }
    }
    this.playTurnService.setRoundBet(1000);
  }

  _openCommunityCards() {
    switch (this.round) {
      case '1stRound':
        this.round = 'flop';
        break;
      case 'flop':
        this.gameService.openCommunityCard(this.round);
        this.round = 'turn';
        break;
      case 'turn':
        this.gameService.openCommunityCard(this.round);
        this.round = 'river';
        break;
      case 'river':
        this.gameService.openCommunityCard(this.round);
        this.round = 'end';
        break;
      default:
        console.log('No more rounds.')
    }
  }

  _placeBet(player: Player, amount: number) {
    player.coins.total -= amount;
    player.coins.bet = amount;
  }

  _endCurrRound() {
    // Call function to split winner points
    // change SB, BB, D
  }

  _getPlayerTurn(player: Player) {
    player.isTurn = true;
    this._editDealerMsg(player.name + "'s turn");
    setTimeout(() => {
      this._clearDealaerMsg();
    }, 3000);
    this.playTurnService.playTurn(player);
  }

  _editDealerMsg(msg) {
    this.isDealerMsg = true;
    this.dealerMsg = msg;
  }

  _clearDealaerMsg() {
    this.dealerMsg = '';
    this.isDealerMsg = false;
  }

}
