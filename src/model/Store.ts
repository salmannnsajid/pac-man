import { observable, action } from 'mobx';
import { Game } from './Game';

export class Store {
  @observable
  game: Game = new Game(this);

  @action.bound
  resetGame() {
    this.game = new Game(this);
    this.game.readyGameForPlay();
  }
}
