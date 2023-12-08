import MapData from "../mapData/pacman6.json";

export type TileId = number;

export const EMPTY_TILE_ID: TileId = 0;
export const BASIC_PILL_ID: TileId = 3533;
export const ENERGIZER_ID: TileId = 3589;

export const WAY_FREE_ID: TileId = 5240;
export const BOX_DOOR_ID: TileId = 5241;

export type TileMatrix = TileId[][];

interface Layer {
  data: number[];
  width: number;
  height: number;
}

const getLayer = (layerName: string, num: any): Layer => {
  let name = layerName;
  if (layerName === "Pills") {
    name = layerName + "-" + num;
  }
  const layer = MapData.layers.find((layer) => layer.name === name);
  if (!layer) {
    throw new Error(`${layerName} layer not found`);
  }
  return layer;
};

const pillsLayer: Layer = getLayer("Pills", 1);
const waysLayer: Layer = getLayer("Ways", null);

export const MAZE_WIDTH_IN_TILES = pillsLayer.width;
export const MAZE_HEIGHT_IN_TILES = pillsLayer.height;

export const getTileMatrix = (data: TileId[]): TileMatrix => {
  const tileMatrix: number[][] = Array(MAZE_HEIGHT_IN_TILES);
  let dataIndex = 0;
  for (let ty = 0; ty < MAZE_HEIGHT_IN_TILES; ty++) {
    tileMatrix[ty] = Array(MAZE_WIDTH_IN_TILES);
    for (let tx = 0; tx < MAZE_WIDTH_IN_TILES; tx++) {
      const tileId = data[dataIndex];
      tileMatrix[ty][tx] = tileId;
      dataIndex++;
    }
  }
  return tileMatrix;
};

export const getPillsMatrix = (num: any): TileMatrix => {
  let pillsLayerData = getLayer("Pills", num !== null ? num : 1);
  return getTileMatrix(pillsLayerData.data);
};
export const waysMatrix: TileMatrix = getTileMatrix(waysLayer.data);
