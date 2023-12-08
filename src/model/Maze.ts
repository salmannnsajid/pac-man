import { observable } from "mobx";
import { getPillsMatrix, TileId } from "./MazeData";

export class Maze {
  @observable
  // pills: TileId[][] = getPillsMatrix(null);
  pills: TileId[][];

  constructor(mazeId: number) {
    this.pills = getPillsMatrix(mazeId);
  }
}
