import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player-model';
import { GameService } from '../../services/game-service';
// import { HttpClient } from '@angular/common/http';
// import { Subscription } from 'rxjs';
// import { tap, map } from 'rxjs/operators';
// import { Recipe } from '../../models/recipe-model';

@Component({
  selector: 'table',
  templateUrl: './table.cmp.html',
  styleUrls: ['./table.cmp.scss'],
})
export class TableCmp implements OnInit {

  constructor(private gameService: GameService) { }

  players: Player[];

  ngOnInit(): void {
    this.gameService.setNewDeck();
  }

  onDealCards() {
    this.players = this.gameService.dealCards();
    this.players.forEach(player => {
      player.img = `https://robohash.org/${player.name}.png?set=set5`;
    });
    console.log(this.players);
  }

}
