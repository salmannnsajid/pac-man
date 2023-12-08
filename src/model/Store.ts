import { observable, action } from "mobx";
import { Game } from "./Game";

export class Store {
  @observable
  game: Game = new Game(this, 1);

  @action.bound
  resetGame(num: number) {
    this.game = new Game(this, num);
    this.game.readyGameForPlay();
  }
}
